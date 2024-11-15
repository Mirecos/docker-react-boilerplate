#!/bin/sh
if [ "$PRODUCTION_MODE" = "True" ]; then
    echo "Starting in production mode"
    exec pnpm run prod
else
    echo "Starting in development mode"
    exec pnpm run dev
fi