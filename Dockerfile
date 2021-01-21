FROM node:15.0.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -f

COPY . .

CMD [ "node", "server.js" ]

EXPOSE 5000
