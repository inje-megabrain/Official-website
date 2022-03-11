FROM node:14-alpine

ENV PORT 3000

USER root

LABEL "purpose"="Official Website Docker"

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend

RUN yarn install

RUN yarn run build

CMD ["yarn", "run", "start"]