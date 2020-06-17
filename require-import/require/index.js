const a = require('./util').a;
console.log('start ' + a);
setTimeout(() => {
    console.log('timeout' + a);
}, 2000);