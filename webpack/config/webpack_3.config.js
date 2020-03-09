const path = require('path');
const absoluteRoute = path.resolve(__dirname, '../webpack_3');
console.log(absoluteRoute);
module.exports = {
    context: absoluteRoute,
    entry: {
        home: './src/home.js',
        center: './src/center.js',
    },
    output: {
        path: `${absoluteRoute}/dist`,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|sass)$/, 
                include: [`${absoluteRoute}/src`],
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ], // 简写 use: ['css-loader']
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.(png|jpe?g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]', // 可提供function
                        outputPath: 'assets/',
                    }
                }]
            }
        ],
    },
}

// oneOf: [{
//     resourceQuery: /a/,
//     use: 'url-loader',
// },{
//     use: [{
//         loader: 'file-loader',
//         options: {
//             name: '[name].[ext]', // 可提供function
//             outputPath: 'assets/',
//         }
//     }]
// }]
// issuer: [],
// options: {},
// enforce: 'pre', // ? pre、post