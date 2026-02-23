FROM node:20-alpine

ARG HOSTNAME
ARG PORT
ARG DATABASE_URL
ARG JWT_SECRET
ARG TOKEN_EXPIRATION_DAYS

ENV HOSTNAME=$HOSTNAME
ENV PORT=$PORT
ENV DATABASE_URL=$DATABASE_URL
ENV JWT_SECRET=$JWT_SECRET
ENV TOKEN_EXPIRATION_DAYS=$TOKEN_EXPIRATION_DAYS


RUN apk update
# Needed for prisma to work fine
RUN apk add openssl

COPY package.json ./api/package.json

WORKDIR /api

RUN npm install -g pnpm
RUN pnpm --version
RUN pnpm install

COPY . /api

RUN chmod +x /api/start.sh
CMD /api/start.sh

EXPOSE 51212
EXPOSE 3001