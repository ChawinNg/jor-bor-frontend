# builder
FROM node:21-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# runner
FROM node:21-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env .env
COPY --from=builder /app/public public

EXPOSE 3000

CMD ["npm", "start"]
