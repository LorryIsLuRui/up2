define(['moduleC'], function(c){
    const fn2 = (p) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('module2 ---> ', p)
                c.fn3(3);
            }, 3000);
        })
    }
    return {
        fn2,
    }
})