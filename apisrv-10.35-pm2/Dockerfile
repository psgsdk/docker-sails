################################
# Dockerfile for PSG-API server
################################

FROM node:0.10.35-slim

MAINTAINER PSG Team psgsdk@gmail.com>

RUN npm install -g sails@0.10.5 pm2@0.12.2 grunt bower npm-check-updates
RUN mkdir /server

# Define mountable directories.
VOLUME ["/server"]

# Add psg-api app
RUN mkdir /server/psgapi
ADD psgapi/ /server/psgapi/

# Define working directory.
WORKDIR /server

# Expose ports.
EXPOSE 1337