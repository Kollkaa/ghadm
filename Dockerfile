FROM node:alpine

WORKDIR /app

COPY package.json /app/package.json
#RUN npm install

COPY . /app

#RUN cd plugins/content-type-builder/
#RUN npm install

#RUN cd /app/plugins/settings-manager/
#RUN npm install

#RUN cd /app/plugins/upload/
#RUN npm install


ENTRYPOINT ["npm"]
