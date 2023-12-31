FROM node:20.10.0

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

CMD [ "npm", "start" ]