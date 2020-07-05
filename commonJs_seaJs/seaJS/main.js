define(function(require, exports, module){
    console.log('hhhhhh');
    const a=require('./modules/moduleA'); // 依赖就近, 所以是先输出 hhhh
    // setTimeout(() => {
    //     const a=require('./modules/moduleA'); // 写在异步里，还是一开始就会加载
    //     console.log('settimeout')
    // }, 5000);

    exports.lorry = true;
})