import * as Koa from 'koa';

const app = new Koa();
const port: number = 4040;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, ()=>{
  console.log('🌏 => server is open loaclhost:' + port)
});