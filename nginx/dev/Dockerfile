# Production stage with nginx
FROM nginx:stable-alpine


# Copy nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]