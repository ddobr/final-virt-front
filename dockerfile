FROM node:14-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]