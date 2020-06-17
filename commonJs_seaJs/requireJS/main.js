// require.config({
//     paths: {
//         A: 'moduleA',
//         B: 'moduleB'
//     }
// })
require.config({
    baseUrl: 'modules',
    paths: {
        A: 'moduleA',
        B: 'moduleB',
        comJsM: 'comJsmodu',
    },
    shim: {
        'unAmd': {
            exports: 'UnAmd',
        }
    }
})
// 如果模块文件和main.js不在同一目录下 可采用
// 1.baseUrl: "js/lib",
// 2.逐一指定路径

// require(['moduleA', 'moduleB'], (a, b) => {
//     // 同一目录可以 ['moduleA', 'moduleB']；不同目录使用require.config()可配置
//     console.log('a ===> ', a, 'b ===> ', b);
//     a.fn1(1);
//     b.fn2(2);
// })
require(['A', 'B', 'unAmd', 'comJsM'], (a, b, c, d) => {
    // 模块自定义名称
    console.log('a ===> ', a, 'b ===> ', b);
    console.log('c ===> ', c);
    console.log('d ===> ', d);
    // a.fn1(1);
    // b.fn2(2);
    // d.fn(); // exports.fn暴露 调用方式
    // d() // module.exports = fn暴露调用方式
})
console.log('sync')