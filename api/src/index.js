import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';

import queries from './data/queries';

dotenv.load();

const log = console.log; // eslint-disable-line

const app = new Koa();
const router = new Router();

router.get('/', (ctx => queries.boilerplate()
  .then(msg => { ctx.body = msg; })
  .catch(log)));

app.use(router.routes());

// TODO use env variable for server port
app.listen(3001);
