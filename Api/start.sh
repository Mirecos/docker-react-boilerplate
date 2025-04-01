#!/bin/sh
if [ "$PRODUCTION_MODE" = "True" ]; then
    echo "Starting in production mode"
    npx prisma generate
    pnpm run migrate:prod
    exec pnpm run prod
else
    echo "Starting in development mode"
    npx prisma generate
    pnpm run migrate:dev
    exec pnpm run dev
fi