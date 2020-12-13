# nestjs-ms-redis

Testing Microservices -> Redis implementation of NestJS ... Testing Microservices -> Redis implementation of NestJS ...

## Redis Setup

```sh
docker run -d -p 6379:6379 redis
```

## Local Development

```sh
# Update config data every 5 seconds
watch -n5 curl http://127.0.0.1:3000

# Display config data every second
watch -n1 curl http://127.0.0.1:3010
```
