FROM registry.cn-hangzhou.aliyuncs.com/x_zh/servers:latest

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app/server/bld

CMD npm run nodeman

EXPOSE 80