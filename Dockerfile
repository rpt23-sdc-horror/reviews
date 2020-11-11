FROM node:14

WORKDIR /reviews-service

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]