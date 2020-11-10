FROM node:15.0.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -f

COPY . .

CMD [ "node", "server2.js" ]

EXPOSE 5000
