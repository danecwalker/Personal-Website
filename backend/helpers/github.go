package helpers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/go-redis/redis/v8"
	"github.com/gofiber/fiber/v2"
)

type Repo struct {
	Name        string `json:"name" redis:"name"`
	Description string `json:"description" redis:"description"`
	Language    string `json:"language" redis:"language"`
	Homepage    string `json:"homepage" redis:"homepage"`
	HtmlUrl     string `json:"html_url" redis:"html_url"`
	ContentsUrl string `json:"contents_url" redis:"contents_url"`
	LangColor   string `json:"lang_color" redis:"lang_color"`
	RawImage    string `json:"raw_image" redis:"raw_image"`
}

type Repos []Repo

func (r *Repo) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		Name        string `json:"name" redis:"name"`
		Description string `json:"description" redis:"description"`
		Language    string `json:"language" redis:"language"`
		Homepage    string `json:"homepage" redis:"homepage"`
		HtmlUrl     string `json:"html_url" redis:"html_url"`
		ContentsUrl string `json:"contents_url" redis:"contents_url"`
		LangColor   string `json:"lang_color" redis:"lang_color"`
		RawImage    string `json:"raw_image" redis:"raw_image"`
	}{
		Name:        r.Name,
		Description: r.Description,
		Language:    r.Language,
		Homepage:    r.Homepage,
		HtmlUrl:     r.HtmlUrl,
		ContentsUrl: r.ContentsUrl,
		LangColor:   Languages[r.Language],
		RawImage:    fmt.Sprintf("http://localhost:4000/api/v1/repos/latest/%s/img", r.Name),
	})
}

func (r Repos) MarshalBinary() ([]byte, error) {

	return json.Marshal(r)
}

func (r *Repos) UnmarshalBinary(d []byte) error {
	err := json.Unmarshal(d, &r)

	return err
}

func fetchRepos() (Repos, error) {
	base := "https://api.github.com/users/danecwalker/repos?sort=updated"
	resp, err := http.Get(base)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}
	var results Repos
	json.Unmarshal(body, &results)
	// fmt.Println(results)

	err = SetEntry("repos", results, time.Hour*24)
	if err != nil {
		fmt.Println(err)
	}
	return results, nil
}

func LatestRepos(c *fiber.Ctx) error {
	limit := c.Query("limit")
	var results Repos
	err := GetEntry("repos", &results)

	switch {
	case err == redis.Nil:
		fmt.Println("key does not exist")
		results, err = fetchRepos()
		if err != nil {
			return c.Status(500).JSON(&fiber.Map{
				"error": err.Error(),
			})
		}
	case err != nil:
		fmt.Println("Get failed", err)
		return c.Status(500).JSON(&fiber.Map{
			"error": "unsuccessful",
		})
	case results == nil:
		fmt.Println("value is empty")
	}

	if c.Params("name") != "" {
		for _, repo := range results {
			if repo.Name == c.Params("name") {
				return c.JSON(repo)
			}
		}

		return c.Status(401).JSON(&fiber.Map{
			"error": "unsuccessful",
		})
	}

	if limit != "" {
		intVar, _ := strconv.Atoi(limit)
		if intVar < len(results) {
			return c.JSON(results[:intVar])
		}
	}

	return c.JSON(results)
}

func saveImage(url string, name string) []byte {
	response, e := http.Get(url)
	if e != nil {
		fmt.Println(e)
	}
	defer response.Body.Close()

	file, err := os.Create(fmt.Sprintf("./raw/%s.jpg", name))
	if err != nil {
		fmt.Println(err)
	}
	defer file.Close()

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println(err.Error())
	}

	_, err = file.Write(body)
	if err != nil {
		fmt.Println(err.Error())
	}

	return body
}

func fetchImage(base string, name string) ([]byte, *fiber.Map) {
	img, err := os.ReadFile(fmt.Sprintf("./raw/%s.jpg", name))
	if err == nil {
		return img, nil
	}

	resp, err := http.Get(base)
	if err != nil {
		fmt.Println(err.Error())
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err.Error())
	}
	var results []map[string]interface{}
	json.Unmarshal(body, &results)

	if results == nil || len(results) < 1 {
		return nil, &fiber.Map{
			"error": "Oh no",
		}
	}

	return saveImage(fmt.Sprint(results[rand.Intn(len(results)-1)]["download_url"]), name), nil
}

func RepoImage(c *fiber.Ctx) error {
	var results Repos
	err := GetEntry("repos", &results)

	switch {
	case err == redis.Nil:
		fmt.Println("key does not exist")
		results, err = fetchRepos()
		if err != nil {
			return c.Status(500).JSON(&fiber.Map{
				"error": err.Error(),
			})
		}
	case err != nil:
		fmt.Println("Get failed", err)
		return c.Status(500).JSON(&fiber.Map{
			"error": "unsuccessful",
		})
	case results == nil:
		fmt.Println("value is empty")
	}

	for _, repo := range results {
		if repo.Name == c.Params("name") {
			img, err := fetchImage(strings.Replace(repo.ContentsUrl, "{+path}", "screenshots", 1), repo.Name)
			if err != nil {
				return c.Status(500).JSON(err)
			}
			return c.Send(img)
		}
	}
	return c.Status(500).JSON(err)
}
