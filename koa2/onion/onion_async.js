const koa = require('koa');
const app = new koa();

/**
 * 洋葱模型
*/   
app.use( async ( ctx, next ) => {
    ctx.body = 'hello koa2';
    console.log('m 1 enter');
    // Promise.resolve().then(function() {
    //     console.log('Promise1')
    // })
    // setTimeout(  () => {
    //     console.log(' timeout');
    // }, 0);
    await next();
    console.log('m 1 out');
})
app.use( async (ctx, next) => {
    console.log('m 2 enter');
    // setTimeout(  () => {
    //     console.log('m 2 timeout');
    // }, 0);
    // Promise.resolve().then(function() {
    //         console.log('Promise2')
    // })
    const res = await next(); // next之前的逻辑是异步的，如果没有await，会出现next之后的先执行
    console.log('m 2 out');
    console.log(typeof res);
    // console.log('m 2 await behind')
})
app.use( async (ctx, next) => {
    console.log('m 3 enter');
    await next();
    console.log('m 3 out');
    return 'm3 return'
})
app.listen(8000, () => {
    console.log('server start 8000');
})