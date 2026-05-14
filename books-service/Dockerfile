FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN addgroup appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 3001

CMD ["node", "src/app.js"]