PHONNY: build push cleanup

all: build push cleanup

build:
	docker buildx build -t registry.digitalocean.com/brainflowingcompany/compnet/werewolf-frontend --platform linux/amd64 .

push:
	docker push registry.digitalocean.com/brainflowingcompany/compnet/werewolf-frontend

cleanup:
	docker image rm registry.digitalocean.com/brainflowingcompany/compnet/werewolf-frontend