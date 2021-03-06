import * as Koa from 'koa';
import * as Mongoose from 'mongoose';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import * as koaStatic from 'koa-static';
import * as koaSend from 'koa-send';
import * as path from 'path';
import { graphql } from 'graphql';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import { ApolloEngine } from 'apollo-engine';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import resolvers from './src/resolvers';
import env from './env';

const app = new Koa();
const router = new koaRouter();
const port: number = 80;
const staticPath: string = path.resolve(__dirname, '..', '..', 'dist');

// middlewares
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.use(koaStatic(staticPath, { extensions: ['html']}));
app.use(async (ctx, next) => {
  if (!/\./.test(ctx.request.url)) {
      await koaSend(
          ctx,
          'index.html',
          {
              root: path.join(__dirname, '../../dist'),
              maxage: 1000 * 60 * 60 * 24 * 7,
              gzip: true,
          } // eslint-disable-line
      );
  } else {
      await next();
  }
});

const typeDefs = importSchema('./src/schemas/main.graphql');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Mock!!!
// addMockFunctionsToSchema({schema});
// const query =`
//   query getLogin{
//     Login(username: "nihao", password: "111"){
//       username,
//       password
//     }
//   }
// `
// graphql(schema, query).then((res: any) => console.log('got!', res));

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
