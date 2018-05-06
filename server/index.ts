import * as Koa from 'koa';
// import * as mongoose from 'mongoose';
import * as MongoClient from 'mongodb';
import * as assert from 'assert';
import env from './env';

const app = new Koa();
const port: number = 4040;

app.use(async ctx => {
  ctx.body = 'Hello Worldbalalallassssss';
});

MongoClient.connect(env.MongoDbUrl, (err: any, client: any) => {
  assert.equal(null, err);
  console.log('Mongodb server is run: ' + env.MongoDbUrl);

  const col = client.db('zh').collection('hi');
  col.find().toArray( (err1: any, res: any) => {
    assert.equal(null, err1);
    console.log(res, '结果');
    client.close();
  })
});

// mongoose.connect('mongodb://172.20.0.1:51044/zh');
// let db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => {
//   console.log('Mongodb server is run: ' + 'mongodb://localhost/zh')
// });

app.listen(port, ()=>{
  console.log('🌏 => server is open loaclhost:' + port)
});