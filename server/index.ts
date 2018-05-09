import * as Koa from 'koa';
import * as Mongoose from 'mongoose';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import { graphiqlKoa,graphqlKoa } from 'apollo-server-koa';
import schema from './src/resolvers'
import env from './env';
// import { UserModel } from './src/models/User';

const app = new Koa();
const router = new koaRouter();
const port: number = 4040;

// middlewares
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

// router
router.post('/graphql', graphqlKoa({schema}));  // graphql
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'})); //graphiql
router.get('/404', async ctx => ctx.body = '404!!!'); // 404

// Mongo
Mongoose.connect(env.MongoDbUrl);
Mongoose.connection
.on('error', console.error.bind(console, 'connection error:'))
.once('open', () => {
  console.log('Mongodb server is run: ' + env.MongoDbUrl)
});

app.listen(port, () => {
  console.log('🌏 => server is open loaclhost:' + port)
});