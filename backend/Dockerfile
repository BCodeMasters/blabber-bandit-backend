FROM node:16

RUN apt-get update
RUN apt-get install software-properties-common -y

RUN mkdir -p /opt/blabberbandit/backend
WORKDIR /opt/blabberbandit/backend

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "-c", "npm install && npm run build && npm run start:dev"]