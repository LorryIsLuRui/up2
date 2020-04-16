
/**
 * my 异步
*/
this.middlewares = [];
ctx = {
    req: {
        user:{}
    },
    res: {},
};
const dispatch = (i, ctx) => {
    const fn = this.middlewares[i];
    if(!fn) return Promise.resolve();
    try{
        return  Promise.resolve(fn(ctx, dispatch.bind(this, i+1, ctx)));
    }
    catch (e){
        return  Promise.reject();
    }
};
const use = (fn) => {
    this.middlewares.push(fn);
};
const m1 =  (ctx, next) => {
    console.log('m1 enter');
    ctx.req.user.name = 'lorry';
    Promise.resolve().then(function() {
        console.log('Promise')
    })
    await next();
    // setTimeout(async () => {
    //     console.log('timeout 1'); 
    //     console.log('m1 out');
    //     console.log('ctx ===> ', ctx);
    // }, 1000);
};
const m2 = async (ctx, next) => {
    console.log('m2 enter');
    ctx.req.user.job = 'frontend engineer';
    setTimeout(async () => {
        console.log('timeout 2'); 
        await next();
        console.log('m2 out');
    }, 5000);
};
const m3 = async (ctx, next) => {
    ctx.req.user.sex = 'female'
    console.log('m3 enter');
    await next();
    console.log('m3 out');
};

use(m1);
use(m2);
use(m3);
dispatch(0, ctx);
// console.log('end ctx ===> ', ctx);
