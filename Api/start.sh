#!/bin/sh
if [ "$PRODUCTION_MODE" = "True" ]; then
    echo "Starting in production mode"
    (cd prisma && npx prisma generate)
    (cd prisma && npx prisma migrate deploy)
    exec npm run prod
else
    echo "Starting in development mode"
    (cd prisma && npx prisma generate)
    (cd prisma && npx prisma db push --accept-data-loss)
    (cd prisma && npx prisma studio --browser none) & exec npm run dev
fi