module.exports = async (ctx, next) => {

    try {
        await next();

        //  处理响应
        // 如果ctx.body有值，则不做处理
        // 如果ctx.body没有值,则使用 state 作为响应
        ctx.body = ctx.body ? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 0,
            data: ctx.state.data !== undefined ? ctx.state.data : {}
        }
    } catch(err) {
        ctx.state = 200;

        ctx.body = {
            code: -1,
            data: err && err.message ? err.message : err.toString()
        }
    }
}