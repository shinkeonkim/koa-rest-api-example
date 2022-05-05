import Koa from 'koa';
import router from './routes';

const app = new Koa();

const PORT = process.env.PORT;

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;

  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes());

// Error Handler
app.on('error', (err: Error) => {
  console.error('[Server Error]', err);
});

app.listen(PORT);
