// NOTICE 测试多入口文件/出口

const path = require('path');
const absoluteRoute = path.resolve(__dirname, '../webpack_2');

module.exports = {
    entry: {
        test1: './webpack_2/src/main.js',
        test2: './webpack_2/src/main1.js',
    },
    output: {
        path: `${absoluteRoute}/dist`,  // 必须是绝对路径
        filename: '[name].js'
    }
}

// Object
/*
    entry: {
        test1: './webpack_2/main.js',
        test2: './webpack_2/main1.js',
    },
    output: {
        path: `${absoluteRoute}/dist`,  // 必须是绝对路径
        filename: '[name].js'
    }
*/


