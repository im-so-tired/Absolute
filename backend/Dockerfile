FROM node

RUN npm install -g npm@9.5.0

WORKDIR /back

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 9000

CMD ["npm", "run", "dev"]
