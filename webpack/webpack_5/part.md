# 代码改变后，希望可以实时更新
- "watch": "webpack --watch",
    -缺点：1. 不会刷新浏览器
          2. 若一个文件被更新，代码将会被重新编译
- webpack-dev-server wds-com命令


# 热更新使用
- 安装 npm install webpack-dev-server --save-dev
## 使用方法
    - 在package.json 添加scripts wds-com命令
    - 在配置文件在的目下运行node_modules/.bin/webpack-dev-server
## 配置
    通过 devServer 这个属性的配置来配置自己的webpack-dev-server

# q
q1: 自己有一个server，还要使用webpack-dev-server再起一个express server？？？

# fix
## fix q1
    webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。
    https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-middleware
    
    如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。

# clean-webpack-plugin
在此之前所有的示例都是自己清楚dist的内容再打包。现使用此plugin在每次构建之前清理dist文件夹[n=5 npm run clean-start]，只会生成用到的文件

# manifest
    https://www.webpackjs.com/guides/output-management/#manifest


