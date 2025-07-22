# Build stage for React frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app

# Copy frontend source code
COPY Frontend/ .

# Install dependencies
RUN npm install --production

# Build arguments that become environment variables during build
ARG PRODUCTION_MODE=false
ARG REACT_APP_RESTAURANT_ID
ARG REACT_APP_RESTAURANT_FULLNAME
ARG REACT_APP_API_URL
ARG PYTHON_APP_API_URL
ARG OPENAI_API_KEY
ARG REACT_APP_OPENWEATHER_API_KEY

# Set environment variables for the build process
ENV REACT_APP_RESTAURANT_ID=$REACT_APP_RESTAURANT_ID
ENV REACT_APP_RESTAURANT_FULLNAME=$REACT_APP_RESTAURANT_FULLNAME
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV PYTHON_APP_API_URL=$PYTHON_APP_API_URL
ENV OPENAI_API_KEY=$OPENAI_API_KEY
ENV REACT_APP_OPENWEATHER_API_KEY=$REACT_APP_OPENWEATHER_API_KEY

# Build the React app with environment variables embedded
RUN npm run build

# Production stage with nginx
FROM nginx:stable-alpine

# Copy the React build output to nginx html directory
COPY --from=frontend-build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx/default.prod.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]