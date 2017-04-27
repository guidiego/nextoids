FROM mhart/alpine-node:7

ENV NODE_ENV "production"

COPY . /app

WORKDIR /app

RUN npm install -g yarn \
    && cd /app \
    && yarn install \
    && yarn build

CMD ["node", "index.js"]