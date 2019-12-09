#Extending image
FROM node:latest

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Install web app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Install quasar cli
RUN npm install -g @quasar/cli

EXPOSE 8080

# Main command
CMD ["quasar", "dev", "-t", "ios"]