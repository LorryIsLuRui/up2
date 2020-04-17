define(function(){
    console.log('A'); // 在main.js里不调用 也会执行
    const fn1 = (p) => {
        console.log('modules/module1 ===> ', p)
    };
    return {
        fn1,
    }
})