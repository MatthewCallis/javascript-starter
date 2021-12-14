FROM node:alpine

LABEL version="1.0"
LABEL description="Server"

# Add an "/app" volume to mount our local files
VOLUME ["/app"]

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ["package.json", "package-lock.json", "./"]

# Install modules for the local OS
RUN npm install && npm cache clean --force

# Copy app source code, not used due to Docker Compose
# COPY . .

# Expose the port
EXPOSE 3000

# Start application
# CMD ["npm", "start"]
