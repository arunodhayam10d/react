FROM node:10
WORKDIR /usr
RUN npm install
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD npm start
