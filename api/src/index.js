import dotenv from 'dotenv';
import Koa from 'koa';
import boilerplate from './data/models/boilerplate';

dotenv.load();

const log = console.log; // eslint-disable-line
const mapToProp = prop => array => array.map(x => x[prop]);
const mapToMessage = mapToProp('message');
const arrayToComaString = array => array.reduce((p, c) => `${p}${p ? ', ' : ''}${c}`, '');

const app = new Koa();

app.use(ctx => {
  const returnMessage = message => {
    ctx.body = message;
  };

  return boilerplate.query()
    .where('message', '!=', 'null')
    .then(mapToMessage)
    .then(arrayToComaString)
    .then(returnMessage)
    .catch(log);
});

// TODO use env variable for server port
app.listen(3001);
