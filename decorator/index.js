const { test, many, mixin, single, fnSingleDeco, fnComplexDeco, readonly } = require('./decorator');

@test('i am Person class', 'living')
// @many
// @single
class Person {
    // @fnSingleDeco
    @fnComplexDeco(1)
    @fnComplexDeco(2)
    say(){
        console.log('say fn')
        return 'say fn str'
    };
    // @readonly
    lorry = true;
    change(){
        this.lorry=false;
    }
}
// 如果同一个方法有多个装饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
    // say两个 先输出outter1 outter2 inner2 inner1
// const p = new Person();
// console.log('p.say() ===> ', p.say()); 
// p.change();
// console.log(p.lorry); // 报错 因为@readonly
// console.log(Person.static)
// console.log(new Person().living)
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

