# commonJS & AMD & CMD
NodeJS是CommonJS规范的实现，webpack 也是以CommonJS的形式来书写。
浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。
1. module
2. exports
3. require
4. global

## Browserify
是目前最常用的 CommonJS 格式转换的工具。
使用：
- browserify main.js -o bundle.js
## browser-unpack
想知道browserify到底做了什么？使用browser-unpack
- npm install browser-unpack -g
使用：
- browser-unpack <  bundle.js

## AMD规范的诞生（异步模块定义）
AMD规范 https://github.com/amdjs/amdjs-api/blob/master/AMD.md
### 诞生背景
common.js 是同步的；这对服务器端没有问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。
因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。[AMD“异步模块”的定义，被依赖的模块必须先于当前模块执行，而没有依赖关系的模块，可以没有先后。]
### 使用
AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
require([module], callback);
目前，主要有两个Javascript库实现了AMD规范：require.js和curl.js
### RequireJs
#### 为什么使用
当需要依次加载多个js文件，会有两个问题：
- 各个文件若存在依赖关系，则必须保证加载顺序
- 加载的时候网页会停止渲染，加载文件越多，响应时间会越长
RequireJs就用来解决上述两个问题
- 实现js文件的异步加载，避免网页失去响应；
- 管理模块之间的依赖性，便于代码的编写和维护。
require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。

require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。
#### require.config()
#### 加载非规范的模块
这样的模块在加载之前要先用require.config定义他们的特征
shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}

　　　　}
#### AMD规范兼容commonJS规范

## CMD（通用模块定义）
### CMD 模块定义规范
- CMD规范 https://github.com/seajs/seajs/issues/242

## RequireJS vs Sea.js
- https://github.com/seajs/seajs/issues/277
- SeaJS对模块的态度是懒执行, 而RequireJS对模块的态度是预执行

参考：
- https://www.geekjc.com/post/58cd5b206fa70c5678a628af#2.
- https://github.com/seajs/seajs/issues/277
- [彻底搞懂模块化 es6 commonJs RequireJs SeaJs] https://github.com/zimplexing/blog/issues/23
