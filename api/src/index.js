import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import boilerplate from './data/models/boilerplate';

dotenv.load();

const log = console.log; // eslint-disable-line
const mapToProp = prop => array => array.map(x => x[prop]);
const mapToMessage = mapToProp('message');
const arrayToComaString = array => array.reduce((p, c) => `${p}${p ? ', ' : ''}${c}`, '');

const app = new Koa();
const router = new Router();

router.get('/', (ctx => {
  const returnMessage = message => {
    ctx.body = message;
  };

  return boilerplate.query()
    .where('message', '!=', 'null')
    .then(mapToMessage)
    .then(arrayToComaString)
    .then(returnMessage)
    .catch(log);
}));

app.use(router.routes());

// TODO use env variable for server port
app.listen(3001);
