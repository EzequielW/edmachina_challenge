# develop stage
FROM node:20-alpine
WORKDIR /home/node/
ADD . ./
RUN npx

EXPOSE 9002
CMD ["nginx", "-g", "daemon off;"]