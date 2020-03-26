FROM node:13.7
WORKDIR /app
COPY package*.json /
RUN npm install
COPY . .

EXPOSE 1234
CMD ["node", "broker.js"]
