import * as Koa from 'koa';
import * as Mongoose from 'mongoose';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphiqlKoa,graphqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import resolvers from './src/resolvers';
import env from './env';
// import { UserModel } from './src/models/User';

const app = new Koa();
const router = new koaRouter();
const port: number = 4040;

app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

const typeDefs = importSchema('./src/schemas/main.graphql');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

router.post(
  '/graphql',
  graphqlKoa({
    schema,
  })
);

router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  })
);

router.get('/404', async ctx => {
  ctx.body = '404!!!';
});


Mongoose.connect(env.MongoDbUrl);
Mongoose.connection
.on('error', console.error.bind(console, 'connection error:'))
.once('open', () => {
  console.log('Mongodb server is run: ' + env.MongoDbUrl)
});

app.listen(port, ()=>{
  console.log('🌏 => server is open loaclhost:' + port)
});