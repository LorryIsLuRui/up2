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
                test: /\.css$/, 
                include: [`${absoluteRoute}/src`],
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
}