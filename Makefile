PHONNY: build push cleanup

all: build push cleanup

build:
	docker buildx build -t 152.42.237.60:50000/compnet/werewolf-frontend --platform linux/amd64 .

push:
	docker push 152.42.237.60:50000/compnet/werewolf-frontend

cleanup:
	docker image rm 152.42.237.60:50000/compnet/werewolf-frontend