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
	&& apt-get update --fix-missing \
	&& apt-get install -y nodejs \
	&& apt-get install nano \
	#&& npm install -g sails@0.10.5 pm2@0.12.2 grunt bower npm-check-updates \
	&& npm install -g express sails pm2 grunt bower npm-check-updates \
	&& npm install -g mocha should assert \
	&& apt-get update --fix-missing \
	&& apt-get install -y supervisor \
	&& mkdir -p /var/log/supervisor \
	&& apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
	&& apt-get autoremove -y \
	&& mkdir -p /server && mkdir /backup

ADD ./config/supervisord.conf /etc/supervisor/conf.d/supervisord-nodejs.conf

RUN ln -s /usr/bin/nodejs /usr/local/bin/node

# Define mountable directories.
VOLUME ["/backup"]

# Add psg-api app
ADD psgapi/ /server/

# Install app modules
WORKDIR /server
RUN npm install

# Expose ports.
EXPOSE 3000
EXPOSE 1337

CMD ["/usr/bin/supervisord", "-n"]
