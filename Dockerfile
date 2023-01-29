FROM node:18.13.0
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
ENV PORT=8080
ENV DATABASE=bv8fjvzp33vz7celpgdr
ENV USER=utdxfiy6z019vheazbmy
ENV PASSWORD=WHzQ78VJUFiXACFIeNsif2L883OPEe
ENV HOST=bv8fjvzp33vz7celpgdr-postgresql.services.clever-cloud.com



ENV ACCESSTOKEN = 5f54036de07977a5a6dec832eaf475776ca09bfb65ce1344ecf67ad52fd073cd48dd7d069d826ec5cf3235c9afdaf8b3da8737c83a806bf022be6e1be961178e


ENV REQUESTTOKEN = c62060bfb92c1d8ff9f1eeceb95b4037dbb223e1b107fb5a0752e2c76dfeb2f00f426ed916e7272aab027bbf42546d7ffcacb75b33947239259d65ebd91b3f8a
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
