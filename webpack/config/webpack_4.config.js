const path = require('path');
const absoluteRoute = path.resolve(__dirname, '../webpack_4');
const extractTexPlugin = require('extract-text-webpack-plugin');
const extractCss = new extractTexPlugin('[name].css');
const extractScss = new extractTexPlugin('stylesheets/[name].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    context: absoluteRoute,
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
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../', // 所有引用资源前加
                        }
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.ts/,
                use: [
                    {loader: 'ts-loader'},
                ]
            },
            {
                test: /\.(png|jpe?g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]', // 可提供function
                        outputPath: 'assets/',
                        limit: 39
                    }
                }]
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }), new HtmlWebpackPlugin({
        title: 'webpack_4_1',
        template: `${absoluteRoute}/src/index.html`,
        inject: true,
    })]
}