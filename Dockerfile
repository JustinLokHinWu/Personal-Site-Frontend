FROM node:14.17-alpine

EXPOSE 3000

# ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --no-progress

COPY . ./

RUN yarn build

CMD ["yarn", "start"]
# CMD ["serve", "-s", "build"]
