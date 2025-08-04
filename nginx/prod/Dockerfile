# Build stage for React frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app

# Copy frontend source code
COPY Frontend/ .

# Install dependencies
RUN npm install --production

# Build arguments that become environment variables during build


# Build the React app with environment variables embedded
RUN npm run build

# Production stage with nginx
FROM nginx:stable-alpine

ARG PRODUCTION_MODE=false
ARG LOCAL_API_BASE_URL

# Set environment variables for the build process
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV PRODUCTION_MODE=$PRODUCTION_MODE

# Copy the React build output to nginx html directory
COPY --from=frontend-build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx/prod/default.prod.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]