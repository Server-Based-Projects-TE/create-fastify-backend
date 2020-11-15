FROM node:14-slim

# Install app
WORKDIR /app
RUN mkdir tmp
COPY package.json .
COPY build ./build/
COPY node_modules ./node_modules/

EXPOSE 3000

CMD node .
