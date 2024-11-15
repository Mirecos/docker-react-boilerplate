FROM node:20-alpine

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install -g pnpm
RUN pnpm --version

COPY . ./srv

WORKDIR /srv
RUN pnpm install
RUN pnpm run build

RUN pnpm install serve

CMD /srv/start.sh

EXPOSE 3000