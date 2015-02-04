################################
# Dockerfile for PSG-API server
################################

#FROM node:0.10.36-slim

FROM ubuntu:14.04
MAINTAINER PSG Team psgsdk@gmail.com>
 
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update \
	&& apt-get update --fix-missing \
	&& apt-get install -y curl \
	&& curl -sL https://deb.nodesource.com/setup | sudo bash - \
	&& apt-get update \
	&& apt-get update --fix-missing \
	&& apt-get install -y nodejs \
	#&& apt-get install nodejs-legacy \
	&& apt-get install nano \
	#&& npm install -g sails@0.10.5 pm2@0.12.2 grunt bower npm-check-updates \
	&& npm install -g sails pm2 grunt bower npm-check-updates \
	&& mkdir /server    

RUN chmod 775 /server

# Define mountable directories.
VOLUME ["/server"]

# Add psg-api app
RUN mkdir /server/psgapi
ADD psgapi/ /server/psgapi/

# Install app modules
WORKDIR /server/psgapi
RUN npm install

# Define working directory.
WORKDIR /server

# Expose ports.
EXPOSE 1337

