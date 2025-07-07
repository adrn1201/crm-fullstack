FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run docker:build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html


COPY public/config.js /usr/share/nginx/html/config.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
