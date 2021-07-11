FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]