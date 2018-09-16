import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';

import queries from './data/queries';

dotenv.load();

const log = console.log; // eslint-disable-line

// TODO cors config based on env vars
const corsConfig = {
  origin: '*',
};

const app = new Koa();
const router = new Router();

router.get('/', (ctx => queries.boilerplate()
  .then(msg => { ctx.body = msg; })
  .catch(log)));

app.use(cors(corsConfig));
app.use(router.routes());

// TODO use env variable for server port
app.listen(3001);
