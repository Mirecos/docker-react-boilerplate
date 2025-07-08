#!/bin/sh
if [ "$PRODUCTION_MODE" = "True" ]; then
    echo "Starting in production mode"
    npx prisma generate
    pnpm run migrate:prod
    exec npm run prod
else
    echo "Starting in development mode"
    npx prisma generate
    npm run migrate:dev
    npx prisma studio & exec npm run dev
fi