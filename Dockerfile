# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Compile your TypeScript code
RUN tsc

# Define the command to run your Node.js application
CMD ["node", "dist/index.js"]

# Expose the port your app listens on (if applicable)
EXPOSE 3000



