### 什么是模块化

将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并进行组合在一起的内部数据是私有的，只是向外暴露一些接口（方法）与外部其他模块通信



模块化的进化史

1、最早，我们是这样写代码的

```js
function foo(){
	//do something...
}
function bar(){
    // do something...
}
```

这样做的话，global被污染，很容易命名冲突

2、简单封装：Namespace模式

```js
var MYAPP = {
	foo:function(){},
    bar:function(){}
}


MYAPP.foo();
```

这样做，减少Global上的变量数目，但是本质上是对象，一点都不安全

3、又进行升级，匿名闭包：IIFE模式（匿名函数自调用（闭包））

```js
var Module = (function(){
    var _private = "safe now";
    var foo = function(){
        console.log(_private)
    }
    
    return{
        foo:foo
    }
})()

//调用模块
Module.foo();
Module._private;   //undefined
```

函数是JavaScript唯一的Local Scope

4、再增强一点：引入依赖

```js
var Module = (function($){
    var _$body = $("body")		//we can use jQuery now!
    var foo = function(){
        console.log(_$body)     //特权方法
    }
    return{
        foo:foo
    }
})(JQuery)

Module.foo();
```

这就是模块模式，也是现代模块实现的基石。

### 为什么要模块化

降低解耦度

### 模块化的好处

避免命名冲突（减少命名空间污染）

更好的分离，按需加载

更高复用性

高可维护性



我们提出模块化的概念之后，会带来什么问题呢？

每个功能都拆分成一个js文件，那么，就会产生以下问题：

请求过多、依赖模糊、难以维护



### 模块化规范

#### CommonJS



#### AMD

#### CMD

#### ES6