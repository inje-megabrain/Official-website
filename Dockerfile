FROM node:14-alpine

ENV PORT 3000

USER root

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY ./ ./

ENV NODE_ENV production

RUN yarn run build

CMD ["yarn", "run", "start"]