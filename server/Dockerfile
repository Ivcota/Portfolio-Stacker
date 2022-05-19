FROM node:16.13

COPY . .

RUN yarn

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]
