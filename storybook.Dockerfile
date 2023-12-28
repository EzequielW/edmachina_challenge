# develop stage
FROM node:20-alpine as develop-stage
WORKDIR /home/node/
COPY . ./
RUN npm install

# build stage
FROM develop-stage as build-stage
# COPY .env ./
RUN npm install
RUN quasar build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /dist/spa /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]