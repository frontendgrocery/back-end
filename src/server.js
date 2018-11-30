import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes';
import responce from './middlewares/responce';
import config from './config'

const app = new Koa();

// 使用响应处理中间件
app.use(logger())
app.use(responce);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`server is running in ${config.port}`);
})