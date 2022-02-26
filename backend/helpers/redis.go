package helpers

import (
	"context"
	"time"

	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func GetEntry(key string, result *Repos) error {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	defer rdb.Close()
	err := rdb.Get(ctx, key).Scan(result)
	return err
}

func SetEntry(key string, val interface{}, exp time.Duration) error {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	defer rdb.Close()
	_, err := rdb.Set(ctx, key, val, exp).Result()
	return err
}
