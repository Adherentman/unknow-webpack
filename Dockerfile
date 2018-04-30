FROM registry.cn-hangzhou.aliyuncs.com/x_zh/servers:latest

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 7001

CMD npm run dev