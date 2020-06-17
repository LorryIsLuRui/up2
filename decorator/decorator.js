
function test(p1, p2){
    console.log(arguments)
    console.log('p1 ===> ', p1);
    console.log('p2 ===> ', p2);
    return function(app){
        console.log('app ===> ', app);// Person{}
        app.static = p1;
        app.prototype.living = p2;
    }
}
function single(target){
    console.log('single decorator');
    target.type = 'single';
}
function many(target){
    console.log('many decorator');
    target.type = 'many';
}
function mixin(p){
    return function(app){
        Object.assign(app.prototype, p);
    }
}
/**
 * 
 * @param {target} target Class.prototype 装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）
 * @param {name} name className
 * @param {desc} desc { value: [Function: say],
  writable: true,
  enumerable: false,
  configurable: true }
  * 装饰器（readonly）会修改属性的描述对象（descriptor），然后被修改的描述对象再用来定义属性。
 */
function fnSingleDeco(target, name, desc){
    console.log('target ===> ', target, 'name ===> ', name, 'desc ===> ', desc);

    const old = desc.value;
    desc.value = function(){
        const arr = Array.from(arguments);
        console.log(`call ${name} function with para = `, arr);
        // 最好return  因为被装饰的方法可能会有返回值
        return old.apply(this, arguments);   
    }
    
    return desc;
}
function fnComplexDeco(para){
    console.log('outter => ', para); 
    return (target, name, desc) => {
        console.log('inner => ', para);
        return desc
    }
}
/**
 * 
 * @param {Object} Person {} 
 * @param {string} name 属性名
 * @param {Object} desc 属性描述符对象
 */
function readonly(target, name, desc){
    console.log('target ===> ', target, 'name ===> ', name, 'desc ===> ', desc);
    desc.writable = false;
    return desc
}
module.exports = {
    mixin,
    test,
    single,
    many,
    mixin,
    fnSingleDeco,
    fnComplexDeco,
    readonly,
}  