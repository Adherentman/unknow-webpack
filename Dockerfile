FROM registry.cn-hangzhou.aliyuncs.com/x_zh/servers:latest

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app/server

CMD npm run start

EXPOSE 80