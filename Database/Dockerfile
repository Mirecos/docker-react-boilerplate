# Use the official PostgreSQL image as a base
FROM postgres:16

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
ADD . /app

ARG POSTGRES_DB
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD

ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD

# Expose port 5432 to allow connections to the database
EXPOSE 5432

# Start the PostgreSQL server when the container is run
CMD ["postgres"]