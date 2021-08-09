FROM node:14.17-alpine

EXPOSE 3000

# ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]


# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --production
# COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

CMD ["npm", "start"]