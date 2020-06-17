// apply bind call
// function a(p1,p2,p3,p4){
//     console.log('p1 ===> ', p1, 'p2 ===> ', p2);
//     console.log('p3 ===> ', p3, 'p4 ===> ', p4);
//     console.log('=============')
//     // console.log('arguments ===> ', Array.from(arguments));
// }
// const b = a.apply(this, ['b', 1, 2, 3]);
// const d = a.bind(this, 'd', 1, 2, 3);
// const c = a.call(this, 'c', 1, 2, 3);
// d();

// 手写bind
// Function.prototype.myBind = function(){
//     const fn = this;
//     const argArr = Array.from(arguments); // 外层参数
//     const that = argArr[0];
//     const paras = argArr.slice(1);
//     return function (){
//         const innerArgArr = Array.from(arguments); // 外层参数
//         const allArgs = paras.concat(innerArgArr);
//         fn.apply(that, allArgs);
//     }
// }
// function a(p1,p2,p3,p4){
//     console.log('p1 ===> ', p1, 'p2 ===> ', p2);
//     console.log('p3 ===> ', p3, 'p4 ===> ', p4);
//     console.log('=============')
// }
// const obj = {
//     name: 'lorry',
// }
// const e = a.myBind(obj, 1);
// e(2,3,4)

// 节流 防抖
// 防抖 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// let timer;
// function debounce(fn, sec){
//     return function(){
//         if(timer){
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fn();
//             // clearInterval(c)
//         }, sec);
//     }
// }
// function a(){
//     console.log('fn');
// }
// var c = setInterval(()=>{
//     console.log(new Date());
// },1000)
// const b = debounce(a, 4000);
// b();
// setTimeout(() => {
//     b();
//     console.log('1s')
// }, 1000);
// setTimeout(() => {
//     b();
//     console.log('2s')
// }, 2000);
// setTimeout(() => {
//     b();
//     console.log('3s')
// }, 3000);
// 节流  规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function throttle(fn, sec){
    return function(){
        
    }
}
function a(){
    console.log('fn');
}
const b = throttle(a, 5000);
setTimeout(() => {
    b();
}, 2000);


