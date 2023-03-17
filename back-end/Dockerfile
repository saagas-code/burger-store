# # Use the official Node.js runtime as a parent image
# FROM node:16.15-alpine

# # Set the working directory in the container to /app
# WORKDIR /app

# # Copy the package.json and package-lock.json files to the container
# COPY package.json ./
# COPY package-lock.json ./
# COPY tsconfig.json ./
# COPY prisma ./prisma/
# # Install the dependencies specified in the package.json file
# RUN npm install


# # Copy the rest of the application code to the container
# COPY . ./

# # Expose port 3000 for the application
# EXPOSE 3000

# RUN npx prisma migrate dev --name init
# # Start the application with the command specified in package.json
# CMD [ "npm", "run", "start" ]

FROM node:14 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

# as build step❓

FROM node:14

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
# or during execution ❓
CMD [ "npm", "run", "start:migrate:prod" ]