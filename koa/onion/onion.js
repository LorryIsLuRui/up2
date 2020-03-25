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
    next();
    console.log('m 1 out');
})
app.use( async (ctx, next) => {
    console.log('m 2 enter');
    setTimeout(async () => {
        next();
        console.log('m 2 out');
    }, 5000);
})
app.use( async (ctx, next) => {
    console.log('m 3 enter');
})
app.listen(8000, () => {
    console.log('server start');
})




