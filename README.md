# nestjs-ms-redis

Testing Microservices -> Redis implementation of NestJS ...

![In Action](in-action.png?1)

## Local Development

```sh
# Start redis
docker run -d -p 6379:6379 redis
```

```sh
# Update config data every 5 seconds
watch -n5 curl http://127.0.0.1:3000

# Display config data every second
watch -n1 curl http://127.0.0.1:3010
```
