import dotenv from 'dotenv';
import Koa from 'koa';

dotenv.load();

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello, World!!';
});

app.listen(3001);
