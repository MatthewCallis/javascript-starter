FROM node:alpine

LABEL version="1.0"
LABEL description="Back End"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ["package.json", "package-lock.json", "./"]

RUN npm install

# Copy app source code
COPY . .

# Expose the port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
