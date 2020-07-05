
// function test(options){
//     console.log('options ===> ', options);
//     this.options = options;
// }
// test.prototype.apply = function(compiler){
//     // console.log('compiler ===> ', compiler);
//     compiler.hooks.emit.tap("MyPlugin", compilation => {
//         console.log("emit hooks触发，this.options = ", this.options);
        
//       });
// }
class test{
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        compiler.hooks.emit.tap("MyPlugin", compilation => {
            // console.log('compilation ===> ', compilation);
            console.log("emit hooks触发，this.options = ", this.options);
            
          });
    }
}
module.exports = test;