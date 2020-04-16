const { test, many, mixin, single, fnSingleDeco, fnComplexDeco, readonly } = require('./decorator');

@test('i am Person class', 'living')
@many
@single
class Person {
    @fnSingleDeco
    @fnComplexDeco(1)
    @fnComplexDeco(2)
    say(){
        console.log('say fn')
        return 'say fn str'
    };
    @readonly
    lorry = true;
}
// 多个装饰器，就近原则执行 single -> many -> test 
// 类的方法装饰器同
// 装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。可以采用高阶函数的形式直接执行。


// function dec(id){
//     console.log('evaluated', id);
//     return (target, property, descriptor) => console.log('executed', id);
//   }
  
//   class Example {
//       @dec(1)
//       @dec(2)
//       method(){}
//   }
//   console.log(new Example().method())
// console.log(Person.static, Person.living, new Person().static, new Person().living);
// console.log(new LowPer().living);
// console.log(new Person().say())
// new Person().say('lorry');
// const p = new Person();
// p.lorry = false;
// console.log('Person ===> ', p.say('lorry'), p.lorry);

