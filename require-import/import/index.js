import { a } from './util';
console.log('start' + a); // 2
setTimeout(() => {
    console.log('timeout ' + a); // 4
},2000)