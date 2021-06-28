FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies 
# A wildcard is used to ensure both package.json and package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "server.js"]