## tips
    - 指定配置文件打包
        在终端webpack目录下运行 n=4 npm run start；n=4表示运行webpack_4
## 工具版本
webpack v4.42.0
node 10.16.2

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

    本质上webpack loader将所有类型的文件转换成应用程序的依赖图（和最终的bundle）可以直接引用的模块
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
            “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用raw-loader 转换一下。”
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
## 模块热替换（hot module replacement）
    此功能会在应用程序运行过程中替换、添加或删除模块，而无需加载整个页面。HMR 不适用于生产环境，这意味着它应当只在开发环境使用。
    主要是通过以下几种方式来显著加快开发速度：
    - 保留在完全重新加载页面时丢失的应用程序状态。
    - 只更新变更内容，以节省宝贵的开发时间。
    - 调整样式更加快速，几乎相当于在浏览器中调试器中更改样式

### 如何运行的
#### 在应用程序中
    如何做到在应用程序中置换模块
    1. 应用程序代码要求HMR runtime 检查更新
    2. HRM runtime（异步）下载更新，然后通知应用程序代码
    3. 应用程序代码要求HMR runtime应用更新
    4. HMR runtime（同步）应用更新
    你可以设置 HMR，以使此进程自动触发更新，或者你可以选择要求在用户交互时进行更新。
#### 在编译器中
    除了普通资源，编译器需要发出“update”，以允许更新之前的版本到新的版本。“update”由两部分组成
    1. 更新后的manifest（JSON）
    2. 一个或多个更新后的chunk（JavaScript）

    manifest包括新的编译hash和所有的待更新chunk目录。每个更新chunk都含有对应于此chunk的全部更新模块（或一个flag用于表明此模块要被移除）的代码

    编译器确保模块id和chunk id在这些构建之间保持一致。通常将这些id存储在内存中（例如，使用webpack-dev-server时），但是也可能将他们存储在一个json文件中。
#### 在模块中
    HMR 是可选功能，只会影响包含 HMR 代码的模块。举个例子，通过 style-loader 为 style 样式追加补丁。为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。

    类似的，当在一个模块中实现了 HMR 接口，你可以描述出当模块被更新后发生了什么。然而在多数情况下，不需要强制在每个模块中写入 HMR 代码。如果一个模块没有 HMR 处理函数，更新就会冒泡(bubble up)。这意味着一个简单的处理函数能够对整个模块树(complete module tree)进行更新。如果在这个模块树中，一个单独的模块被更新，那么整组依赖模块都会被重新加载。
#### 在HMR Runtime中（看不懂）
    https://www.webpackjs.com/concepts/hot-module-replacement/#%E5%9C%A8-hmr-runtime-%E4%B8%AD

### 入门
在开发过程中，可以将 HMR 作为 LiveReload 的替代。webpack-dev-server 支持 hot 模式，在试图重新加载整个页面之前，热模式会尝试使用 HMR 来更新。更多细节请查看模块热更新指南。

与许多其他功能一样，webpack 的强大之处在于它的可定制化。取决于特定项目需求，会有许多种配置 HMR 的方式。然而，对于多数实现来说，webpack-dev-server 能够配合良好，可以让你快速入门 HMR
### 使用
    https://www.webpackjs.com/guides/hot-module-replacement/

