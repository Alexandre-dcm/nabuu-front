FROM node:20-alpine

WORKDIR /var/www/html

COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev"]