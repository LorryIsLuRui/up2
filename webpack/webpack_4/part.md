使用sass
- 安装node-sass、sass-loader
# plugins
## extract-text-webpack-plugin
将所有entry chunk中引用的css、less、sass文件,移动到独立的css文件，即样式不再嵌入到js bundle中。如果文件大小比较到，这样做会更快提前加载，因为css bundle 和js bundle并行加载

const extractCss = new extractTexPlugin("[name].css"); 
- name是当前entry的 chunkname，要重写打包成的css文件名，给构造器filename参数传function
- 如果给构造函数传'stylesheets/[name].css'会改变生成路径的参数，可能会对sass文件内资源引用有影响

webpack4以上使用 mini-css-extract-plugin。生成的资源路径问题参照以上loader
解决方法：给处理png的loader添加options.publicPath或者给处理sass/css的loader加options.publicPat

独立出css文件 vs 内嵌在js中
| 优点| 缺点 |
| ---- | ---- |
| 更少的style标签 | 额外的http请求 |
| css SourceMap（使用 devtool: 'source-map' 和 extract-text-webpack-plugin?sourceMap 配置）| 更长的编译时间 |
| css请求并行 | 没有运行时（runtime）的公共路径修改 |
| css单独缓存 | 没有热更替 |
| 更快的浏览器运行时（runtime）（更少代码和dom操作）| ... |
css摘出来怎么引入？使用HtmlWebpackPlugin？
## html-webpack-plugin
    简化了html的创建，以便为webpack提供服务。这对于在文件名中包含每次会随着编译而发生变化哈希的webpack bundle尤其有用。此插件生成一个html（dist/index.html）。如果有多个入口点，他们都会在生成的html文件的script标签内（比如此时index.js home.js，生成的index.html就有两个script分别引入打包后的home.js index.js）；如果有任何css assets在webpack中输出（利用ExtractTextPlugin提取CSS），那么这些将被包含在HTML head中的<link>标签内。

## html-withimg-loder
在HTML的img中引入的图片未打包？？？webpack_3都可以
https://segmentfault.com/q/1010000007566185
html-loader

乱码问题 可能是file-loader/url-loader导致的 设置esModule: false,
## CommonsChunkPlugin
将公共模板拆出来，最终合成的文件能够在最开始的时候加载一次，便存到缓存中供后续使用。这个会带来速度上的提升，因为浏览器会迅速将公共代码从缓存中取出来而不是每访问一个新页面再去加载一个更大的文件。 [在webpack v4以上被移除，可用SplitChunksPlugin]
