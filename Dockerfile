FROM node:18.18.0

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

CMD [ "npm", "start" ]