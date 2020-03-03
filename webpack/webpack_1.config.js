// NOTICE 测试entry output默认值

const path = require('path');

module.exports = {
    entry: './webpack_1/index.js',
    output: {
        path: `${__dirname}/webpack_1`,
        filename: 'bundle.js',
    }
}
/**
 * console.log(path.dirname(__filename));
 * console.log(__dirname);
 * console.log(__filename); // /Users/lorry/workspace/up2/webpack/webpack.config.js
 * __dirname === path.dirname(__filename);  // /Users/lorry/workspace/up2/webpack
 * https://nodejs.org/api/modules.html#modules_dirname
 */

 /**
  * entry
  * [默认值./src, 即在配置文件不设置entry，执行webpack会去寻找src下的文件]
  *  [如果配置文件没有设置src属性，也没有src文件 会报错]
  *    ERROR in Entry module not found: Error: Can't resolve './src' in '/Users/lorry/workspace/up2/webpack'
  * 我们使用 Node 内置的 path 模块，并在它前面加上 __dirname这个全局变量。可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期工作。
  */

  /**
   * output 默认值
   * [默认路径参考入口，配置文件不设置output属性，执行webpack会自动创建./dist并将打包后的文件输入其中默认 ./dist/main.js]
   */
  /**
   * 如果配置文件不设置entry output且src里有多个文件（index.js index1.js），会如何？
   * 答：只会打包src/index.js
   * 如果src里命名不是index.js？
   * 答：报错，ERROR in Entry module not found: Error: Can't resolve './src' in '/Users/lorry/workspace/up2/webpack'
   */