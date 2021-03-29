FROM node:14-slim

# Install app
WORKDIR /app
RUN mkdir tmp data

COPY node_modules ./node_modules/
COPY build ./build/
COPY deploy/docker ./deploy/docker
COPY package.json .

EXPOSE 3000

CMD node .
