define(function(require, exports, module){
    const m_c = require('moduleC');
    const fn = () => {
        console.log('AMD规范允许输出的模块兼容CommonJS规范')
    }
    // exports.fn = fn; // 通过exports对外提供接口
    module.exports = fn; // 也可以暴露出对象形式
    console.log('exports ===> ', exports, 'module ===> ', module);
    // return fn; // 除了给 exports 对象增加成员，还可以使用 return 直接向外提供接口。
    // 提示：exports 仅仅是 module.exports 的一个引用。在 factory 内部给 exports 重新赋值时，并不会改变 module.exports 的值。因此给 exports 赋值是无效的，不能用来更改模块接口。
})