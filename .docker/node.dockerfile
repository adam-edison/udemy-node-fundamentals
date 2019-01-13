FROM node:10.15.0-jessie
WORKDIR /usr/src/app

# copy both package.json and package-lock.json (if it exists)
COPY package*.json ./
RUN npm install --quiet


#Commands basted on mutable items
RUN npm install -g nodemon supervisor
CMD ["npm","start"]

# Launch to allow inspection in chrome - dev mode only!
# CMD ["node", "--inspect-brk=0.0.0.0:9229", "app.js"]
