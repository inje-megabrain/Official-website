FROM mhart/alpine-node:slim-14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]