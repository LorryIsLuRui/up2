const koa = require('koa');
const app = new koa();

/**
 * 洋葱模型
 * m 1 enter
 * m 2 enter
 * m 3 enter
 * m 2 out
 * m 1 out
*/
app.use( async ( ctx, next ) => {
    ctx.body = 'hello koa2';
    console.log('m 1 enter');
    await next();
    console.log('m 1 out');
})
app.use( async (ctx, next) => {
    console.log('m 2 enter');
    await next();
    console.log('m 2 out');
})
app.use( async (ctx, next) => {
    console.log('m 3 enter');
    await next();
    console.log('m 3 out');
})
app.listen(8000, () => {
    console.log('server start 8000');
})




