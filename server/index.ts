import * as Koa from 'koa';
import * as Mongoose from 'mongoose';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import * as koaStatic from 'koa-static';
import * as path from 'path';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import { ApolloEngine } from 'apollo-engine';
import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import resolvers from './src/resolvers';
import env from './env';

const app = new Koa();
const router = new koaRouter();
const port: number = 5050;
const staticPath: string = path.resolve(__dirname, '..', '..', 'dist');

// middlewares
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.use(koaStatic(staticPath, { extensions: ['html']}));

const typeDefs = importSchema('./src/schemas/main.graphql');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// router
router.post('/graphql', graphqlKoa({ schema, tracing: true, cacheControl: true })); // graphql
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' })); //graphiql
router.get('/404', async (ctx: Koa.Context) => (ctx.body = '404!!!')); // 404

// Mongodb
Mongoose.connect(env.MongoDbUrl);
Mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => {
    console.log('Mongodb server is run: ' + env.MongoDbUrl);
  });

const engine = new ApolloEngine({
  apiKey: env.EngineApiKey,
});

// app listen
engine.listen(
  {
    port: port,
    koaApp: app,
  },
  () => {
    console.log('🌏 => server is open loaclhost:' + port);
  }
);
