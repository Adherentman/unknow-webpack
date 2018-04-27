import * as Koa from 'koa';

const port: number = 4040;
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, ()=>{
  console.log('🌏 => server is open loaclhost:' + port)
});
