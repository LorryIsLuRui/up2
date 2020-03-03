
  只设置多入口文件，不设置output属性，会生成./dist。两个打包后的文件会生成一个bundle.js输出到dist

  - [name] 入口名称
  - [id]chunk id
  - [hash] 本次构建过程 唯一生成的hash
  - [chunkhash] 基于每个chunk内容生成的hash
  
  [hash] 和 [chunkhash] 的长度可以使用 [hash:16]（默认为20）来指定。或者，通过指定output.hashDigestLength 在全局配置长度。



   如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。
   entry是数组形式的话，会将所有entry打包到一个bundle.js文件里
   ```
    entry: {
            index: './webpack_2/index.js',
            index1: './webpack_2/index1.js'
    },
   ```
   想要输出各自的bundle.js, 可以写成对象形式。key值不能一样
