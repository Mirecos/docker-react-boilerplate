# Dockerized react app

Here is a boilerplate docker compose project divided in four docker services :
- Frontend : node-alpine hosted react app
- Api : node-alpine hosted express app using prisma ORM
- Database : MySQL databasee
- nginx : reverse proxy 

## Development environment 

In dev mode all services are used. NGinx expose port 80 :
- localhost:80/ -> React APP in dev mode
- localhost:80/api/ -> Express APP in dev mode

## Production environment

In dev mode all services are used. NGinx expose port 80 :
- localhost:80/ -> Compiled react app static files
- localhost:80/api/ -> Express APP served for production

As the react is served through static files, the frontend container is not running in prod mode.

## 