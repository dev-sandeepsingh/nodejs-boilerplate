FROM node:12

# Create app directory
WORKDIR /usr/src/app

ENV PORT=${PORT}

# # Bundle app source
COPY . .

# env variables to .env file
COPY .env.sample .env

# set the port
#EXPOSE 5001

# run the project
#CMD [ "node", "src/index.js" ]