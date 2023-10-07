FROM node:lts-alpine

ENV NODE_ENV=development

EXPOSE 8080

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm" ,"run", "serve"]