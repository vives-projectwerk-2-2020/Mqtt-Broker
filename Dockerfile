FROM node:13.7
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . .

EXPOSE 1234
CMD ["node", "broker.js"]
