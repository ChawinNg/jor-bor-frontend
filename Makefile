PHONNY: build push

all: build push

build:
	docker buildx build -t 44.221.177.107:50000/compnet/werewolf-frontend --platform linux/amd64 .

push:
	docker push 44.221.177.107:50000/compnet/werewolf-frontend