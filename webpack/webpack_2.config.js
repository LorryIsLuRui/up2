// NOTICE 测试多入口文件/出口

const path = require('path');

module.exports = {
    entry: {
        test1: './webpack_2/main.js',
        test2: './webpack_2/main1.js',
    },
    output: {
        path: `${__dirname}/webpack_2/dist`,  // 必须是绝对路径
        filename: '[name].[chunkhash].js'
    }
}


