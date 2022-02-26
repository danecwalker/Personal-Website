package main

import (
	"github.com/danecwalker/Personal-Website/helpers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	api := app.Group("/api")
	v1 := api.Group("/v1")

	api.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	v1.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	v1.Get("/ping", func(c *fiber.Ctx) error {
		c.Set("Version", "v1")
		return c.JSON(&fiber.Map{
			"message": "pong",
		})
	})

	v1.Get("/repos/latest/:name?", helpers.LatestRepos)
	v1.Get("/repos/latest/:name/img", helpers.RepoImage)
	v1.Get("/repos/latest/:name/code", helpers.RepoCode)

	app.Listen(":4000")
}
