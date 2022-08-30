FROM --platform=linux/amd64 node:alpine AS build

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build


# production environment
FROM --platform=linux/amd64 busybox:latest AS prod

RUN adduser -D static
USER static

WORKDIR /app

COPY --from=build /app/dist .

EXPOSE 80

CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]

