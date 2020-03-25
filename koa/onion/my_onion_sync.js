
/**
 * my 同步
*/
this.middlewares = [];
ctx = {
    req: {
        user:{}
    },
    res: {},
};
const dispatch = (i, ctx) => {
    if(i === this.middlewares.length) return;
    return this.middlewares[i](ctx, dispatch.bind(this,i+1, ctx));
};
const use = (fn) => {
    this.middlewares.push(fn);
};
const m1 = (ctx, next) => {
    console.log('m1 enter');
    ctx.req.user.name = 'lorry'
    next();
    console.log('m1 out');
};
const m2 = (ctx, next) => {
    console.log('m2 enter');
    ctx.req.user.job = 'frontend engineer'
    next();
    console.log('m2 out');
};
const m3 = (ctx, next) => {
    ctx.req.user.sex = 'female'
    console.log('m3 enter');
};

use(m1);
use(m2);
use(m3);
console.log('this.middlewares ===> ', this.middlewares);
console.log('ctx ===> ', ctx);
dispatch(0, ctx);
console.log('end ctx ===> ', ctx);
