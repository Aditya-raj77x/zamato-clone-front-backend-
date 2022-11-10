FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

ENV MONGO_URL="mongodb+srv://aditya:aditya@cluster0.uljmz5w.mongodb.net/?retryWrites=true&w=majority"
ENV JWTSECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=""
ENV AWS_S3_SECRET_KEY=""
ENV GOOGLE_CLIENT_ID=409207526622-0a54sj06asarn286g8uel6tmf5c3jfsc.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

RUN npm run build

CMD [ "npm","run","start" ]