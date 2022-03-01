FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

COPY *.go ./
COPY ./helpers/*.go ./helpers
COPY ./raw/* ./raw
COPY ./snippets/* ./snippets

RUN go build -o backend github.com/danecwalker/Personal-Website

EXPOSE 5000

CMD ["./backend"]