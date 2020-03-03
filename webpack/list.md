## 文档
https://www.webpackjs.com/concepts/

webpack是一个现代JavaScript应用程序的静态模块打包器，当webpack处理应用程序时，它会递归的构建一个递归关系图
其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。在开始前你需要先理解
## 四个核心概念
    - 入口（entry）
    - 输出（output）
    - 插件（plugins）
    - loader
### 入口
    指示webpack应该以哪个模块作为构建其内部依赖关系图的开始，进入起点后，会找哪些模块和库是入口起点的依赖（直接、间接）
    每个依赖项随即被处理，最后输出到bundles文件夹中。可以配置一个或多个入口起点，默认值是./src。
    [默认值./src, 即在配置文件不设置entry，执行webpack会去寻找src下的文件]
    [如果配置文件没有设置src属性，也没有src文件 会报错]
    ```
        ERROR in Entry module not found: Error: Can't resolve './src' in '/Users/lorry/workspace/up2/webpack'
    ```
### output
    告诉webpack在哪里输出他所创建的bundles，以及如何命名这些文件，默认./dist，基本上整个应用程序结构都会被编译到你指定的输出路径的文件夹中
    [默认路径参考入口，配置文件不设置output属性，执行webpack会自动创建./dist并将打包后的文件输入其中默认 ./dist/main.js]

    ```
        const path = require('path');
        module.exports = {
        entry: './path/to/my/entry/file.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
            }
        };
    ```

### loader 
    让webpack能够处理非js文件（webpack自身只理解js），loader可以将所有类型的文件转换为webpack能够处理的有效模块，然后利用webpack的打包能力，对他们进行处理。在import或“加载”模块时预处理文件，因此loader类似于其他构件工具中的“任务（task）”，并提供了处理前端构建步骤的强大方法

    本质上webpack loader将所有类型的文件转换成应用程序的依赖图（和最重的bundle）可以直接引用的模块
    ```
       const path = require('path');

        const config = {
        output: {
            filename: 'my-first-webpack.bundle.js'
        },
        module: {
            rules: [
            { test: /\.txt$/, use: 'raw-loader' }
            ]
        }
        };

        module.exports = config;

        /** 
            “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用       raw-loader 转换一下。”
        */
    ```
### 插件
    loader被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括从打包优化、压缩一直到重新定义环境中的变量，
    插件接口功能强大，用来处理各种各样的任务
    ```
        const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
        const webpack = require('webpack'); // 用于访问内置插件

        const config = {
        module: {
            rules: [
            { test: /\.txt$/, use: 'raw-loader' }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]
        };
        module.exports = config;
        // 在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。
    ```
### tips
    - 指定配置文件打包
        webpack --config webpack_1.config.js