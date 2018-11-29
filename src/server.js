import Koa from 'koa';
import router from './routes';
import response from './middlewares/responce';
import config from './config'

const app = new Koa();

// 使用响应处理中间件
app.use(response)


app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const end = new Date();
    const ms = end - start;
    console.log(`${ctx.method} ${ctx.url} ${ms}`);
})

app.listen(config.port, () => {
    console.log(`server is running in ${config.port}`);
})