FROM node:20-alpine
WORKDIR /home/node/
COPY ./db.json /home/node/
COPY ./package.json /home/node/
RUN npm install -g json-server