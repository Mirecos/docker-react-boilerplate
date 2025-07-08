FROM node:20-alpine

COPY . ./srv
WORKDIR /srv

RUN npm install
RUN npm run build
RUN npm install serve

CMD /srv/start.sh

EXPOSE 3000