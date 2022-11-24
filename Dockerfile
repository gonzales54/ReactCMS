FROM node:18.12.1-slim

USER root
RUN npm i -g npm@latest

USER node
WORKDIR /home/node/app