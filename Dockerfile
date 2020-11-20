FROM node:12-alpine
WORKDIR /usr/src/clean-node-api
COPY package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 3333
ENTRYPOINT [ "npm", "start" ]