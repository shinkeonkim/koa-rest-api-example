import Koa from 'koa';
import KoaLogger from 'koa-logger';

import router from './routes';

const app = new Koa();

const PORT = process.env.PORT;

app.use(KoaLogger());

app.use(router.routes());

// Error Handler
app.on('error', (err: Error) => {
  console.error('[Server Error]', err);
});

app.listen(PORT);
