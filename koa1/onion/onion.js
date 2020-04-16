const koa = require('koa');
const app =  new koa();
app.use(function *( next){
    console.log('m 1 enter');
    yield next;
    console.log('m 1 out');
})
app.use(function *( next){
    console.log('m 2 enter');
    setTimeout(  function* (){
        console.log('m 2 timeout');
        yield next;
    }, 2000);
    console.log('m 2 out');
})
app.use(function *( next){
    console.log('m 3 enter');
    yield next;
    console.log('m 3 out');
})
app.listen(8000, () => {
    console.log('koa1 start at 8000 port');
})