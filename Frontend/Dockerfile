FROM node:20-alpine

COPY . ./srv
WORKDIR /srv

RUN npm install

CMD npm run start

EXPOSE 3000