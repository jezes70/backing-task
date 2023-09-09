FROM node:alpine
# Use an official Node.js runtime as the base image


# Set the working directory in the container
WORKDIR /app

COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Expose the port your app listens on (if applicable)
EXPOSE 3000

# Define the command to run your Node.js application
CMD ["node", "index"]
