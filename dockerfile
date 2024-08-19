FROM node:22

COPY . ./app

WORKDIR /app

RUN npm i

CMD ["npm" ,"run" ,"dev"]
