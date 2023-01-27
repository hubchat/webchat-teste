FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . . 

RUN npm run build

ENV MONGO_URL='mongodb://mongodb:27017/hubchat'

EXPOSE 3333

CMD ["npm","run","start"] 