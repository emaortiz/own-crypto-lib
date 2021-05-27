# Use starter image
FROM node:14 as builder

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose port
EXPOSE 3000

# Default command to run
CMD ["npm", "start"]
