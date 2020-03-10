const path = require('path');
const mini = require('mini-css-extract-plugin');
const htmlPlu = require('html-webpack-plugin');
const webpack = require('webpack');
const cleanPlu = require('clean-webpack-plugin').CleanWebpackPlugin; 
const absoluteRoute = path.resolve(__dirname, '../webpack_5');
module.exports = {
    entry: {
        index: `${absoluteRoute}/src/index.js`,
        home: `${absoluteRoute}/src/home.js`,
    },
    output: {
        path: `${absoluteRoute}/dist`,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: mini.loader,
                    options: {
                        publicPath: '../'
                    }
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpe?g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                        limit: 39000,
                        esModule: false,
                    }
                }]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: `${absoluteRoute}/dist`,
        compress: true,
        port: 9000,
        hot: true,
    },
    plugins: [
        new mini({
            filename: 'css/[name].css'
        }),
        new htmlPlu({
            title: 'webpack_5',
            template: `${absoluteRoute}/src/index.html`,
            inject: true,
        }),
        new cleanPlu({path: `${absoluteRoute}/dist`}),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}