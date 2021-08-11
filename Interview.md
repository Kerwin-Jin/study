## HTML

### 代码片段

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Vue</title>
	</head>
	<body>
		<div id="box">
			<ul id="list"></ul>
		</div>
	</body>
	<script>
		const list = document.querySelector("#list")
		const fragment = document.createDocumentFragment()
		for(let i=0;i<5;i++){
			let li = document.createElement("li")
			li.innerHTML = `item${i+1}`
			fragment.appendChild(li)
		}
		list.appendChild(fragment)
	</script>
</html>
```



## CSS

### CSS权重计算

选中且设置!important的>权重高的>权重相同位置靠后的>来自继承的

如果两组选择器都定位到同一元素，且对同一属性设置不同的样式，则需要分别计算两组选择器的权重来确定优先级。一个选择器的优先级可以说是由四个部分计算得分，比较时按位比较。

1. 千位：如果声明在style的属性则该位得一分
2. 百位：选择器中包含ID选择器则该位得一分
3. 十位：选择器中包含类选择器、属性选择器或者伪类则该位得一分
4. 个位：选择器中包含标签选择器、伪元素选择器则该位得一分

eg：#header p .content .active得分位0121>.header p .active::before权重为0022，前者权重大于后者

### BFC

什么是BFC？

block formatting context 块级格式化上下文。作用主要是用来形成独立的渲染区域，让这个渲染区域的元素不会去影响外界

形成BFC的条件：

1. 浮动元素：float不是none
2. 绝对定位元素：position是absolute或fixed
3. 块级元素：overflow不是visible
4. flex元素
5. inline-block元素等等

应用场景：用来清除浮动

### px em rem

px：绝对长度单位

em：相对长度单位，相对于父元素

rem：相对长度单位，相对于html根元素

因为一个元素的父元素是不确定的，所以想要统一的设置一个长度的话用em就不太合适，可以设置好html根元素的长度大小，然后其他元素就可以使用rem来进行设置，所以rem用的相对多一些。我们在html中通过font-size设置大小，在其他元素上使用的时候不仅限于font-size这个属性，还可以使用width，height等等。

### 水平居中

行内元素：text-align:center

块级元素：margin:0 auto

absolute定位元素：left:50%;  margin-left:负值

## JS

### 闭包、堆栈、深浅克隆

#### 堆栈内存

基本类型会直接往栈中存，引用类型会先开堆，最终是把地址赋值给这个值



Example 1：

数字属性名 == 字符串属性名

```js
<script>	
    let a = {},b='0',c=0
    a[b] = '珠峰'
    a[c] = '培训'
    console.log(a[b])	//培训
</script>
```

![cF5in0.png](https://z3.ax1x.com/2021/03/31/cF5in0.png)

Example 2：

Symbol的作用是创建唯一值的

```js
<script>
	let res = Symbol('1')==Symbol('1')
	console.log(res)		//false

    let a = {},
    b = Symbol('1')
    c = Symbol('1')

    a[b] = '珠峰'
    a[c] = '教育'

    console.log(a[b])	//珠峰

</script>
```

Example 3：

引用类型都会变成字符串来进行存储

```js
<script>
		
    let a = {},
    b = {name:'kerwin'}
    c = {age:11}

    a[b] = '珠峰'			//b为objec，会存储为'[Object,Object]'这个字符串
    a[c] = '教育'			//c为objec，也会存储为'[Object,Object]'这个字符串，所以两个键相同个，后边的会覆盖掉前面的

    console.log(a[b])		//教育

</script>

```

alert弹出的值都会转成字符串

```
alert({name:'Kerwin'})   //[Object, Object]
```

Array也是对象的一种表现形式，所以，定义一个数组，里边保存的也是引用，两个变量指向同一个内存地址时，一个改变，另一个也会改变

```js
let arr1 = [1,2,3,4]
let arr2 =arr1
console.log(arr1)
console.log(arr2)

arr1[1] = 10
console.log(arr1)
console.log(arr2)
```

### 隐式类型转换

```js
<script>
	
	if(typeof(a) && (-true)+(-undefined)+''){
		console.log("通过了")
	}else{
		console.log("没通过")
	}
</script>
```

```js
<script>
	
	if(1+5*'3'===16){
		console.log("通过了")
	}else{
		console.log("没通过")
	}
</script>
```

```js
<script>
	console.log(!!' '-!!false+!!''||'不通过')
</script>
```

```js
<script>
	window.a || (window.a = '1')
	console.log(window.a)	//1
</script>

<script>
	window.a && (window.a = '1')
	console.log(window.a)	//undefined
</script>
```

### 数组

### 正则

### 手写深拷贝



### 预编译

函数声明是整体提升，变量只有声明提升，赋值是不会提升的

```js
<script>
	console.log(test)	//函数体
	console.log(b)		//undefined
	
	function test(){
		console.log(1)
	}
	var b = 3
	
</script>
```

在函数内部，如果没有声明变量，直接给这个变量赋值的话，那么这个变量会提升到全局变量

```js
<script>
	
	function test(){
		var a = b = 1
	}
	
	test()
	console.log(b)	// 1
	console.log(a)	// 报错
	console.log(window.a)	// undefined
</script>
```

函数内部的预编译过程AO

```js

<script>
	//1.寻找形参和变量声明
	//2.实参值赋值给形参
	//3.找函数声明，赋值
	//4.执行
	function test(a){
		console.log(a)
		var a = 1
		console.log(a)
		function a(){}
		console.log(a)
		var b = function(){}
		console.log(b)
		function d(){}
	}
	test(2)
	// a:undefined > 2 > function(){} >1
	// b:undefined > function(){}
	// d:function(){}
</script>
```

全局预编译过程GO

```js
<script>
	
	// 1.找变量
	// 2.找函数声明
	// 3.执行
	console.log(a)
	var a = 10
	function a(){
		console.log(2)
	}
	console.log(a)
</script>
```

执行如下代码会打印什么？

```js
<script>
	var b = 3
	console.log(a)
	function a(a){
		console.log(a)
		var a = 2
		console.log(a)
		function a(){}
		var b = 5
		console.log(b)
	}
	a(1)
	
	// GO = {
	// b:undefined
	// a:undefined>function(){}
	// }
	
	// AO={
	// a:undefined >1>function(){}>2
	// b:undefined>5
	// }
</script>
```

```js
<script>
	
	a = 1
	function test(){
		console.log(a)
		a = 2
		console.log(a)
		var a = 3
		console.log(a)
	}
	
	test()
	var a
	
	// GO = {
	// a:undefined > 1 >2
	// test:undefined
	// }
	
	// AO = {
	// a:undefined>3
	// }
</script>
```

```js
<script>
	
	function test(){
		console.log(b)//undefined
		if(a){
			var b = 2
		}
		c=3
		console.log(c)//3
	}
	
	var a
	test()
	a =1
	console.log(a)	//1
	
	// GO = {
	// a:undefined > 1
	// c:undefined >3
	// }
	
	// AO = {
	// b:undefined
	// 
	// }
</script>
```

```js
<script>
	
	function test(){
		return a
		a=1
		function a(){}
		var a=2
	}
	
	console.log(test())
	
	// AO = {
	// a:undefined>function(){}
	// }
</script>
```

```js
<script>
	
	a =1
	function test(e){
		function e(){}
		arguments[0]  =2
		console.log(e)//2
		if(a){
			var b = 3
		}
		var c
		a =4
		var a
		console.log(b)//undefined
		f=5
		console.log(c)//undefined
		console.log(a)//4
	}
	var a
	test(1)
	
	// GO = {
	// a:1
	// test:function(){...}
	// }
	
	// AO = {
	// e:undefined>!>function(){}>2
	// b:undefined:undefined>3
	// a:undefined>4
	// f:undefined>5
	// c:undefined
	// }
</script>
```

### this的使用场景

1.代表window，比如script中直接console.log(this)

2.代表应用事件的元素，比如div.onclick = function(){ console.log(this); }

3.字面量形式创建的对象，this表示当前的字面量对象

4.构造方法中的this代表创建出来的对象



### 作用域链

视频讲解：https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=538

> [[scope]]说明：在函数创建的时候，生成的一个JS内部的隐式属性，这个隐式属性是JS引擎来读取的，它是函数存储作用域的容器

所谓作用域链是指：在每个函数内部都有一个属性，这个属性是[[Scope]]属性，这个属性是不可以操作的。该属性指向了一个集合，这个集合中保存了当前作用域下面变量对象（所谓变量对象就是指，在每个作用域下面都会有一个对象，该作用域下面定义的所有变量和方法都是该对象添加的属性和方法，全局作用于下面的变量对象就是window对象）的地址，以及上级作用域下面的变量对象的地址，这个集合就是作用域链。

当在使用某个变量时，先从当前作用域下面的变量对象上查找，如果有则返回其值，如果没有，则沿着作用域链向上级作用域中的变量对象身上查找，依次往上查找。当找到window对象依然没有找到该变量，那么就报错。

```js
<script>
	var num = 10
	function outer(){
		var num = 20
		
		function inner(){
			console.log(num)	//打印结果为20
		}
		inner()
	}
	
	outer()
</script>
```

### 闭包

视频讲解：https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=539

**闭包是什么？**闭包（closure）是JavaScript的一大难点，也是他的特色。很多高级应用都要依靠闭包来实现，要理解闭包，首先要理解JavaScript的全局变量和局部变量。JavaScript语言的特别之处就在于：函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量。

**为什么需要闭包？**闭包可以用在许多地方，它最大的用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保存在内存中，不会在函数调用后被自动清除。

**总结：**局部变量无法共享和长久的保存，而全局变量可能造成变量污染，当我们希望有一种机制既可以长久的保存变量又不会造成全局污染，那我们就需要用到闭包。

**定义：**闭包就是能够读取其他函数内容变量的函数，由于在JavaScript中，只有函数内部的子函数才能读取局部变量，所以说，闭包可以简单的理解成“定义在一个函数内部的函数“，所以，在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

**原理**：按道理说，每个函数在执行完毕后会从内存中将该函数弹出，如果函数被从内存中弹出，那么该函数的作用域链由于没有东西对它进行引用，那么这个作用域链就会被销毁，该函数的变量对象也就没有被引用，变量对象也会被销毁，闭包之所以可以在外部函数执行完毕后依然能够使用外部环境中的变量，是因为当外部函数被销毁时，由于闭包中使用了外部函数变量对象中的内容，所以外部函数的变量依然会被保存在内存中。

**作用**：可以将函数中定义的变量拿到函数外部来从操作，即闭包在它所在的函数和全局环境中建立起了桥梁。

**不足**：由于闭包会将上级作用域下面的变量对象保存在内存中，那么如果程序中有大量的闭包，势必会造成内存资源的浪费，建议在不使用闭包的时候，手动将闭包清除。

```js
function outer(){
    let a = 100
    
    return function(){
        a++;
        console.log(a);
    }
}

let res = outer()	//outer()执行的结果才是我们的闭包

//调用闭包函数
res()		//输出100

res = null //不使用闭包的时候，手动将闭包清除。
```

**闭包应用**

1、用一个公共函数记录行走的值

```js
<script type="text/javascript">
    function counter(){
    let count = 0;

        return function(){
            console.log(count++)
        }
    }
    let fn1 = counter();
    fn1()
    fn1()
    fn1()
    fn1()

    let fn2 = counter();
    fn2()
    fn2()
    fn2()
</script>
```

2、用闭包封装原生XMLHttpRequest请求

原生写法：

```js
<script type="text/javascript">
		let mobile = "18953506546",
		let password = "12345"
		sendData(mobile,password)
		
		
		function sendData(mobile,password){
			let xmlHttp = new XMLHttpRequest();
			xmlHttp.open('url')
			xmlHttp.setRequestHeader("Centent-type","application/json")
			xmlHttp.send(JSON.stringify({mobile:mobile,password:password}))
			
			xmlHttp.onreadystatechange = function(){
				if(xmlHttp.readyState == 4 %% xmlHttp.status == 200){
					console.log(xmlHttp.responseText)
				}
			}
		}
	</script>
```

闭包方式封装：

```js
<script type="text/javascript">
		function Http(){
			let xmlHttp = new XMLHttpRequest();
			let _url = 'http://localhost:3300'
			
			return {
				request:function(method,url,data,success,error){
					xmlHttp.open(method,_url+url)
					if(method=="GET"){
						xmlHttp.send()
					}else{
						xmlHttp.setRequestHeader("Content-Type","application/json")
						
						xmlHttp.send(JSON.stringify(data))
					}
					
					xmlHttp.onreadystatechange = function(){
						if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
							success(xmlHttp.responseText)
						}else{
							error(xmlHttp.responseText)
						}
					}
				}
			}
		}
		
		Http().request('post','http://localhost:3300/login',{username:'liujinfei',password:'123'},function(data){
			console.log(data)
		},function(error){
			console.log(error)
		})
	</script>
```



### 立即执行函数

立即执行函数最大的作用就是独立创建了一个作用域，里面所有的变量都是局部变量，不会有命名冲突的情况，同时也避免了定义大量全局变量污染整个全局环境这样一个问题

```js
//定义一个匿名执行函数，功能是在控制台打印一个hello
(function(){
    console.log("Hello")
})()


//定义一个匿名自执行函数，求两个数的和
(function(a,b){
    console.log(a+b)
}(1,2))

//定义一个匿名自执行函数，功能是求两个数的和，将和作为返回值返回
let sum = (function(a,b){
    return a+b
})(1,2)

console.log(sum)
```

### 原型

什么是原型：每个函数（包括构造函数和普通函数）中都会有一个属性-prototype属性，普通函数的原型对象没啥意义，这里的原型一般都指得是构造函数。这个属性指向了一个对象，这个对象就被称为原型对象，简称原型。原型中存储的是通过构造方法创建出来的所有对象可以共享的内容，可以使用构造方法名称.prototype属性来获取原型对象

我们把私有的属性放在构造方法里，比如name,age,sex，

把公共的属性或方法放在原型中，每一个new出的对象都可以使用这个属性和方法

原型对象的 增 删 改 查

```js
<script>
	function Person(name,age,sex){
		this.name = name;
		this.age = age
		this.sex = sex
	}
	
	//为原型添加内容
	Person.prototype.speak = function(){
		console.log('hello')
	}
	
	Person.prototype.nation = '中国'
	Person.prototype.hairColor = 'black'
	
	//更改原型内容
	Person.prototype.hairColor = 'yellow'
	
	
	//删除原型内容
	delete Person.prototype.hairColor
	
	
	//原型内容的获取
	var res = Person.prototype.nation
	console.log(res)
	Person.prototype.speak()
	
	console.log(Person.prototype)
	
	// 原型内容的获取可以直接通过对象来获取， 增 删 改不可以
	var p = new Person("Kerwin",18,"男")
    console.log(p.nation)		//中国
	p.speak()
	
</script>
```

为什么new出来的对象可以直接获取原型中的内容？

是因为：在每个对象中有一个`__proto__` 属性，这个属性指向了创建该对象的原型对象，当利用对象去查找某个属性的时候，属性的查找顺序是：先从自身的私有属性中查找，如果私有属性中有要查找的属性，则返回其对应的值，如果私有属性中没有要查找的属性，则沿着`__proto__`的指向，到原型对象中去查找，如果有就返回其对应的值。

```js
Person.prototype === p.__proto__		//true
```

我们new一个String对象，可以调用String的很多方法，这个就是用到了这个原理

```js
<script>
	var str =new String("hellow")
	console.log(String.prototype)		//String的原型对象
	console.log(str.__proto__)			//String的原型对象

	console.log(str.split(""))			//split方法是String原型中的公有的方法
</script>
```



### 继承

#### 借用构造方法继承 call/apply

借用构造方法继承，继承的是上级构造方法对私有属性的绑定和初始化操作

格式如下：

```
function 构造方法1(){}

function 构造方法2(){

	构造方法1.call/apply(this,实参1,实参2,实参3...)

	this.属性名 = 属性值

	this.属性名 = 属性值

}
```

实例

```js
<script>
	function Person(name,age,sex){
		this.name = name
		this.age = age
		this.sex = sex
	}
	
	function Student(name,age,sex,subject,school,teacher){
        //通过借用构造方法的形式来继承上级构造方法对name、age、sex属性的绑定和初始化操作
		Person.call(this,name,age,sex)
        //Person.apply(this,[name,age,sex])
		this.subject = subject
		this.school = school
		this.teacher = teacher
	}
	
	var stu = new Student('Kerwin',18,'男',['语文','数学','英语'],'正华中学','卫老师')
	var stu2 = new Student('Jack',20,'女',['Chinese','Math','English'],'THU中学','卫老师')
	
	console.log(stu)
	console.log(stu2)
	
</script>
```

#### 原型链继承

视频讲解：https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=547

通过构造方法继承是没法将上级构造函数原型的方法继承下来的，只能继承私有属性的绑定，继承不了原型

所谓原型链继承，就是让下级构造方法的prototype属性指向上级构造方法创建出来的一个实例（对象）

```
function 构造方法1(){}

function 构造方法2(){
	this.属性名 = 属性值
	this.属性名 = 属性值
}

构造方法2.prototype = new 构造方法1()
```

实例

```js
<script>
	function Person(name,age,sex){
		this.name = name
		this.age = age
		this.sex = sex
	}
	Person.prototype.nation = '中国'
	
	Person.prototype.speak = function(){
		console.log("Hello")
	}
	
	function Student(name,age,sex,subject,school,teacher){
		this.subject = subject
		this.school = school
		this.teacher = teacher
	}
		
	//通过原型链继承，让下级构造方法的prototype属性指向上级构造方法创建出来的一个实例
	Student.prototype = new Person()
	//如果采用原型链继承，就会导致下级构造方法原型中的constructor属性的指向发生改变（constructor属性是原型中的一个属性，这个属性默认指向它的构造方法，如果采用原型链继承，那么constructor属性的指向就不再指向自己的构造方法了，所以我们需要将它重新指回自己的构造方法）
	Student.prototype.constructor = Student
	
	var stu = new Student('Kerwin',18,'男',['语文','数学','英语'],'正华中学','卫老师')
	
	console.log(stu.nation)		//中国
	stu.speak()					//Hello
	
</script>
```

到底什么是原型链？所谓原型链，就是指通过原型链继承，在原型之间建立起来的一条链式结构，我们把这条链式结构称为原型链。当对象在操作属性时，先从自身的私有属性中查找，如果有，则返回对应的属性值，如果没有，则沿着自身的`__proto__`属性到它的原型中查找，如果他的原型中也没有，那么就会沿着原型链继续往上查找，如果找到则返回对象的值，如果找到Object原型也没有发现要找的属性，则返回undefined

#### 组合继承

就是将构造方法继承和原型链继承合在一块，既能继承私有属性的绑定，又能继承原型中的东西，这种写法就是组合继承

```js
<script>
	function Person(name,age,sex){
		this.name = name
		this.age = age
		this.sex = sex
	}
	
	Person.prototype.nation = "中国"
	Person.prototype.speak = function(){
        console.log("Hello")
    }
	
	
	function Student(name,age,sex,subject,teacher){
        
        //借用构造方法继承私有属性的绑定
		Person.call(this,name,age,sex)
		this.subject = subject
		this.teacher = teacher
	}
	
	//继承原型中的东西
	Student.prototype = new Person()
	Student.prototype.constructor = Student
	
	var s = new Student('Kerwin',18,'男',['语文','数学','英语'],'卫老师')
	
	console.log(s)
	console.log(s.name)
	console.log(s.nation)
	s.speak()
</script>
```

### 跨域

1. jsonp，原理是通过script标签的src属性，需要准备一个回调函数用来接收返回的数据
2. 设置cors Access-control-allow-origin:*
3. 设置服务器代理

### 迭代器

引入：字符串、数组、对象、函数参数等的遍历方法是不一样的，我们寻求一种统一的方式来进行遍历

```js
//数组遍历
var arr = [1,2,3,4]

for(var i=0;i<arr.length;i++){
	console.log(arr[i])
}
//字符串遍历
var str = "Hello"

for(var k=0;k<arr.length;k++){
	console.log(str[k])
}

//对象遍历
var obj = {id:1,name:'kerwin'}
for(var i in obj){
	console.log(i,'============',obj[i])
}

//函数参数遍历
function test(){
	console.log([...arguments])
}

test(1,2,3)
```

用for...of可以数组，字符串的遍历，对象不可以，为什么？for...of本质上是调用原型中的 `Symbol(Symbol.iterator)` 方法，如果原型中有，就可以用for...of进行迭代，否则就不行。数组、字符串原型上面有这个方法，所以可以，对象里面没有这个方法，所以不行

```js
var arr = [1,2,3]
var str = "hello"
var obj = {id:1,name:'kerwin'}
console.log(arr)
console.log(Object.getPrototypeOf(str))		//获取字符串对象的原型
console.log(obj)


for(var i of arr){
    console.log(i)
}
for(var i of str){
    console.log(i)
}
for(var i of obj){
    console.log(i)	//报错
}
```

自定义迭代器

```js
var arr = [1,2,3]

function makeIterator(arr){
	var index = 0
	return {
		next:function(){
			if(index<arr.length){
				return {value:arr[index++],done:false}
			}else{
				return {value:undefined,done:true}
			}
		}
	}
}
var iter = makeIterator(arr)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
```

总结：迭代器是从目标源依次、逐个抽取的方式来提取数据，该目标源是有序的、连续的，而遍历没有严格的要求

可以进行迭代的数据类型：Array，String，Map，Set，arguments，Nodelist，他们都是有序连续的，但是对象不是有续连续的，所以对象不能迭代

### 生成器

我们想要迭代对象，有没有方便的方法来得到迭代器呢？有，那就是生成器

```js
function* test(){
	yield(1);
	yield(2);
	yield(3);
	yield(4);
}

var iter = test()
// console.log(iter)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

for(var i of iter){
	console.log(i)
}
```

### for循环 for...in forEach for...of

for循环是js当中最简单的遍历方法，主要是针对数组进行遍历的，效率不高，但是可以使用continue和break

for...in循环主要是用来遍历对象的，（遍历对象的可枚举属性的），效率最低，原因是不但要遍历自身的属性，还要遍历原型

forEach是数组的一个方法，主要是用来遍历数组的，效率最高，但是不可以使用continue和break

for...of是es6里面新加的一种遍历方法 ，（前提必须是可迭代对象），效率没有forEach高（比其他的高），也可以使用continue和break，只能针对可迭代对象

### 状态码

HTTP常用状态码及其含义？ 

**1xx：指示信息--表示请求已接收，继续处理**

100 Continue 初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）

101 Switching Protocols 服务器将遵从客户的请求转换到另外一种协议（HTTP 1.1新）

**2xx：成功--表示请求已被成功接收、理解、接受**

200 OK 一切正常，对GET和POST请求的应答文档跟在后面。

201 Created 服务器已经创建了文档，Location头给出了它的URL。

202 Accepted 已经接受请求，但处理尚未完成。

203 Non-Authoritative Information 文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝（HTTP 1.1新）。

204 No Content 没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。

205 Reset Content 没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。

206 Partial Content 客户发送了一个带有Range头的GET请求，服务器完成了它（HTTP 1.1新）。

**3xx：重定向--要完成请求必须进行更进一步的操作**

300 Multiple Choices 客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。

301 Moved Permanently 客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。

302 Found 类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved Temporatily”。出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求http://host/~user（缺少了后面的斜杠），有的服务器返回301，有的则返回302。严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见307。

303 See Other 类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。

304 Not Modified 客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

305 Use Proxy 客户请求的文档应该通过Location头所指明的代理服务器提取（HTTP 1.1新）。

307 Temporary Redirect 和302（Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是303时 才能重定向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只能跟随对GET请求的重定向。（HTTP 1.1新）

**4xx：客户端错误--请求有语法错误或请求无法实现**

400 Bad Request 请求出现语法错误。

401 Unauthorized 客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填写合适的Authorization头后再次发出请求。

403 Forbidden 资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。

404 Not Found 无法找到指定位置的资源。这也是一个常用的应答。

405 Method Not Allowed 请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）

406 Not Acceptable 指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容（HTTP 1.1新）。

407 Proxy Authentication Required 类似于401，表示客户必须先经过代理服务器的授权。（HTTP 1.1新）

408 Request Timeout 在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。（HTTP 1.1新）

409 Conflict 通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。（HTTP 1.1新）

410 Gone 所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而404表示由于未知的原因文档不可用。（HTTP 1.1新）

411 Length Required 服务器不能处理请求，除非客户发送一个Content-Length头。（HTTP 1.1新）

412 Precondition Failed 请求头中指定的一些前提条件失败（HTTP 1.1新）。

413 Request Entity Too Large 目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。

414 Request URI Too Long URI太长（HTTP 1.1新）。

416 Requested Range Not Satisfiable 服务器不能满足客户在请求中指定的Range头。（HTTP 1.1新）

**5xx：服务器端错误--服务器未能实现合法的请求**

500 Internal Server Error 服务器遇到了意料不到的情况，不能完成客户的请求。

501 Not Implemented 服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求。

502 Bad Gateway 服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。

503 Service Unavailable 服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个Retry-After头。

504 Gateway Timeout 由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。（HTTP 1.1新）505 HTTP Version Not Supported 服务器不支持请求中所指明的HTTP版本。（HTTP 1.1新）

### 事件对象

什么是事件对象：事件对象是JS中的一个内置对象，该对象记录了和当前事件相关的信息，另外事件对象也提供了当量的属性和方法帮助我们操作对象

事件对象的获取：

谷歌浏览器：JS底层会把事件对象被以实参的形式传递给事件处理函数。

```html
<body>
	<div id="box"></div>
</body>
<script>
	let box = document.querySelector("#box")
    
    //把事件对象被以实参的形式传递给事件处理函数
	box.onclick = function(e){
		console.log(e)
	}
</script>
```

IE8及以前的IE浏览器：需要使用window对象的event属性来获取

```html
<body>
	<div id="box"></div>
</body>
<script>
	let box = document.querySelector("#box") 
	box.onclick = function(){  
        //把事件对象被以实参的形式传递给事件处理函数
		var e = window.event
        console.log(e)
	}
</script>
```

兼容写法

```html
<body>
	<div id="box"></div>
</body>
<script>
	let box = document.querySelector("#box")
	box.onclick = function(e){
		var evt = e || window.event
		console.log(evt)
	}
</script>



<script>
    //优化
	let box = document.querySelector("#box")
	box.onclick = function(e){
		e = e || window.event
		console.log(e)
	}
</script>


```

### 事件代理

事件代理也叫事件委托



### 取消默认行为

preventDefault方法

作用：取消页面中某些元素的默认功能，如超链接

格式：e.preventDefault()

注意：IE8及以前的IE浏览器不支持，如果是IE低版本的浏览器，可以使用事件对象.returnValue = false

```html
<body>
    <a href="https://www.baidu.com">跳转到百度</a>
</body>

<script>
	var link = document.querySelector('a')
    link.onclick = function(e){
        e = e || window.event
        e.preventDefault==undefined?(e.returnValue = false):e.preventDefault()
    }
</script>
```

### 鼠标右击事件

```js
<script>
    
    //当在页面上点击鼠标右键时触发
	document.oncontextmenu = function(e){
    	e = e||window.event
    	e.preventDefault==undefined?e.returnValue=false:e.preventDefault()
	}    
</script>
```

### 阻止冒泡事件

谷歌和IE兼容

```js
<script>
	let box = document.querySelector("#box")
	box.onclick = function(e){
		e = e || window.event
		// 兼容写法
		e.stopPropagation == undefined ? e.cancelBubble = true : e.stopPropagation()
	}
</script>
```

### 定时器

window.setInterval() 与 window.clearInterval()

```js
<script>
	(function(){
		console.log("定时器开始...")
		var intervalId = setInterval(function(){
			console.log(111)
		},1000)
		
		var box = document.getElementById("box")
		box.onclick = function(){
			console.log("清除定时器...")
			clearInterval(intervalId)
		}
	})()
</script>
```

### 函数防抖和节流

假设一个函数100ms要执行100次，那么就会造成浏览器卡顿

正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行

节流：在规定的间隔时间范围内不回重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

防抖：前面的所有触发都会被取消，最后一次执行在规定的时间之后才会，也就是说如果连续快速的触发，只会执行一次

将需要执行的次数减少为节流，将多次变为单词为防抖

可以通过lodash库中的throttle函数进行节流操作，在三级菜单中用过，快速划过一级菜单的时候可以用节流操作。

> https://www.lodashjs.com/docs/lodash.throttle

### 回调地狱

多层回调函数的相互嵌套，就形成了回调地狱，示例如下：

```js
let foo = function(){
    setTimeout(()=>{
        console.log("setTimeout1");
        
        setTimeout(()=>{
            console.log("setTimeout2");
        },2000)
    },1000)
}
```

回调地狱的缺点：

- 代码耦合性太强，牵一发而动全身，难以维护
- 大量冗余的代码相互嵌套，代码的可读性变差

如何解决回调地狱？

为了解决回调地狱的问题，ES6（ECMAScript 2015）中新增了**Promise**的概念

### Promise

#### 基本概念

1. Promise是一个构造函数
   - 我们可以创建Promise的实例 const p = new Promise()
   - new出来的Promise实例对象，代表一个异步操作
2. Promise.prototype上包含一个.then()方法
   - 每一次new Promise()构造函数得到的实例对象，
   - 都可以通过原型链的方式访问到.then()方法，例如p.then()
3. .then()方法用来预先指定成功和失败的回调函数
   - p.then(result=>{},error=>{})
   - 调用.then()方法时，成功的回调函数是必选的，失败的回调函数是可选的

#### then方法的特性

如果上一个.then方法中返回了一个新的Promise实例对象，则可以通过下一个.then()继续处理。通过.then()方法的链式调用，就解决了回调地狱的问题。

#### 通过.catch捕获错误

在Promise的链式操作中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理

```js
thenFs.readFile('./1.txt','utf8')
.then(r1=>{
    console.log(r1)
    return thenFs.readFile('./2.txt','utf8');
})
.then(r2=>{
    console.log(r2)
    return thenFs.readFile('./3.txt','utf8');
}).catch(err=>{
    console.log(err.message);
})
```

如果不希望前面的错误导致后续的.then无法正常执行，则可以将.catch的调用提前，示例如下：

```js
thenFs.readFile('./1.txt','utf8')
.then(r1=>{
    console.log(r1)
    return thenFs.readFile('./2.txt','utf8');
})
.catch(err=>{
    console.log(err.message);
})
.then(r2=>{
    console.log(r2)
    return thenFs.readFile('./3.txt','utf8');
})
```

#### Promise.all

Promise.all()方法会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作（等待机制），示例代码如下：

```js
// 定义一个数组，存放3个读文件的异步操作，都是返回Promise示例对象
const promiseArr = [
    thenFs.readFile('./1.txt','utf8'),
    thenFs.readFile('./2.txt','utf8'),
    thenFs.readFile('./3.txt','utf8'),
]

// 将Promise的数组，作为Promise.all()的参数
Promise.all(promiseArr)
.then(([r1,r2,r3])=>{
    console.log(r1,r2,r3);  // 所有文件读取成功
}).catch(err=>{
    console.log(err.message);  // 捕获异步操作中的错误
})
```

#### Promise.race

Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作完成，就立即执行下一步的.then操作（赛跑机制）。示例代码如下：

```js
// 定义一个数组，存放3个读文件的异步操作，都是返回Promise示例对象
const promiseArr = [
    thenFs.readFile('./1.txt','utf8'),
    thenFs.readFile('./2.txt','utf8'),
    thenFs.readFile('./3.txt','utf8'),
]

// 将Promise的数组，作为Promise.all()的参数
Promise.race(promiseArr)
.then(result => {
    console.log(result);  // 所有文件读取成功
}).catch(err => {
    console.log(err.message);  // 捕获异步操作中的错误
})
```

#### 案例

基于Promise封装读文件的方法

```js
import fs from "fs"

function getFile(fpath){
    return new Promise((resolve,reject)=>{
        fs.readFile(fpath,'utf8',(err,data)=>{
            if(err) return reject(err);
            resolve(data);
        });
    })
}

getFile('./1.txt').then(res=>{
    console.log(res);    
},err=>{
    console.log(err);
});
```

### async/await

#### 是什么

async/await是ES8（ECMAScript 2017）引入的新语法，用来简化Promise异步操作，在async/await出现之前，开发者只能通过链式.then()的方式处理Promise异步操作，示例代码如下：

```js

thenFs.readFile('./1.txt', 'utf8').then(
    r1 => {
        console.log(r1);
        return thenFs.readFile('./2.txt', 'utf8');
    }
).then(r2 => {
    console.log(r2);
    return thenFs.readFile('./3.txt','utf8');
}).then(r3=>{
    console.log(r3);
})
```

.then链式调用的优点：解决了回调地狱的问题

缺点：代码冗余，阅读性差，不易理解

#### 基本使用

如果某个方法的返回值是一个Promise示例对象，那么我们就可以在前面用**await**来进行修饰，修饰完毕之后，这个返回值就不再是Promise示例了，就变成了一个真正的值，需要注意的是：如果方法内部用到了await，那么这个方法必须被**async**来进行修饰

```js
async function getAllFiles(){
    const r1 = await thenFs.readFile('./1.txt','utf8');
    console.log(r1);

    const r2 = await thenFs.readFile('./1.txt','utf8');
    console.log(r2);

    const r3 = await thenFs.readFile('./1.txt','utf8');
    console.log(r3);
}
```

#### 注意事项

1. 如果在function中使用了await，则function必须被async修饰
2. 在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行

```js

console.log("A");

async function getAllFiles(){

    console.log("B");

    const r1 = await thenFs.readFile('./1.txt','utf8');
    const r2 = await thenFs.readFile('./1.txt','utf8');
    const r3 = await thenFs.readFile('./1.txt','utf8');

    console.log(r1,r2,r3);

    console.log("C");
}

console.log("D");

result:
A
B
D
111 222 333
C
```



### EventLoop

JavaScript是单线程语言，也就是说，同一时间只能做同一件事

#### 同步任务和异步任务

为了防止某个耗时任务导致程序假死的问题，JavaScript把待执行的任务分成了两类：

**同步任务**（synchronous）

- 同步任务又叫做非耗时任务，指的是在主线程上排队执行的那些任务
- 只有前一个任务执行完毕，才能执行后一个任务

**异步任务**（asynchronous）

- 又叫做耗时任务，异步任务由JavaScript委托给宿主环境进行执行
- 当异步任务执行完成后，会通知JavaScript主线程执行异步任务的回调函数

#### 同步和异步任务的执行过程

> https://www.bilibili.com/video/BV1zq4y1p7ga?p=247

![](https://i0.hdslb.com/bfs/album/80789812473ae94d2bad8233a463051df2dda45c.png)

#### EventLoop的基本概念

JavaScript主线程从“任务队列”中读取异步任务的回调函数，放到执行栈中依次执行。这个过程是循环不断的，所以整个的这种运行机制又称为EventLoop（事件循环），结合上图

#### 面试题

![](https://i0.hdslb.com/bfs/album/afe4347e5a8225dae2bd1ad60971fd4af4b7407b.png)

### 宏任务和微任务

#### 是什么

![](https://i0.hdslb.com/bfs/album/807d2d6e7d63d4203d062dc134676e994d732718.png)



#### 执行顺序

![](https://i0.hdslb.com/bfs/album/b9838a8a5e15eef4455a8ba2444fadc40b87eb32.png)

#### 面试题

> https://www.bilibili.com/video/BV1zq4y1p7ga?p=252
>
> https://www.bilibili.com/video/BV1zq4y1p7ga?p=251

## 移动端

### 300ms延迟

> https://zhuanlan.zhihu.com/p/69522350

解决方法

1、禁止网页缩放

```html
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
```

2、fastclick插件

```html
//引入
<script src="https://cdn.bootcdn.net/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>

//使用
<script type="text/javascript">
	if ('addEventListener' in document) {
	    document.addEventListener('DOMContentLoaded', function() {
	        FastClick.attach(document.body);
	    }, false);
	}
</script>
```

### touch事件的穿透问题

1、阻止默认行为

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<style>
		#app{
			width: 100vw;
			height: 100vh;
			background:rgba(0,0,0,.8);
			position: absolute;
			left: 0;
			bottom : 0;
			z-index: 100;
		}
	</style>
</head>
<body>
    <div id="app"></div>
	<a href="https://www.baidu.com">百度</a>
</body>
<script type="text/javascript">
	let app = document.getElementById("app")
	app.onclick = function(e){
		e.preventDetault();		//阻止默认行为
		app.style.display = 'none';
	}
</script>
</html>
```

2、fastclick.js插件

同300ms延迟一样

## Vue面试题

### v-for和v-if为何不能连用

v-for比v-if优先级高，实质是v-for优先执行，会创建对应的dom节点，如果v-if为false，会删除这个dom节点；这样创建后再删除，会造成不必要的性能浪费。

### $nextTick

Vue的$nextTick这个API里面的回调函数会在dom异步渲染完毕之后执行，用这个能实现一些特别需要依赖dom实例化完之后干的一些事，比如进行new Swiper的初始化

### 父子组件通信的方式

1、父传子的时候，是通过属性来传值，在子组件中添加props属性

2、子传父是通过在子组件上添加一个类似于监听的事件，当子组件触发这个事件的时候，相应的执行父组件中的方法，子组件也可以将值传到父组件中。

3、通过在子组件上放置一个ref属性，在父组件中就可以通过this.$refs.[ref属性值]获取子组件，拿到的是组件对象，进而可以获取该组件对象的值。

4、回调函数的方式：父组件通过向子组件传一个函数，该函数因为定义在父组件中，所以可以操作父组件的值，然后在子组件中可以触发该函数，原理和1一样

### 组件中的data为什么是一个函数

每一个组件都应该有属于自己的一份状态，因为组件就是为了复用嘛，为了使组件中使用的数据不相互影响，所以Vue在设计的时候就把他设计成必须为一个函数，不是函数的话他也会报错。

### 全局事件总线

是什么？是一个组件间通信的方式，本质是一个对象，要符合两个条件，所有组件都能看到他，组件必须能使用$on和$emit

为什么兄弟组件要用这种方式？因为事件总线符合任何组件关系的

怎么做？先在main.js中new Vue的时候安装总线Vue.prototype.$bus = this

```js
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```



### VueRouter面试题

问题一、描述：Vue-router编程式导航路由跳转当当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误，声明式路由导航跳转到内部已经处理。

原因：vue-router3.1.0之后，引入了promise的语法，如果没有通过参数指定成功或者失败回调函数就会返回一个promise且内部会判断如果要跳转的路径和参数都没有变化，会抛出一个失败的promise

解决：1.在跳转的时候指定成功或者失败的回调函数，或者catch处理错误。

```js
toSearch(){
      if(this.keyword.trim()=="") return alert("请输入搜索关键词！");
      this.$router.push({
        name:"search",
        params:{
          keyword:this.keyword
        }
      }).catch(()=>{})
    }
```

2.修改Vue原型上的push和replace方法（优秀）

```js

// 将原有的push方法保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push;

// 可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function(location, onResolved, onRejected){

    if(onResolved === undefined && onRejected === undefined){

        // 如果没有传后边两个回调函数，就catch一下，就不会出现告警了
        return originPush.call(this,location).catch(()=>{});
    }else{

        // 如果传了后边两个回调函数，说明已经将告警处理了
        return originPush.call(this,location,onResolved,onRejected);
    }

}

```





## 项目中遇到的问题

### element-ui文件上传

用element-ui开发电商管理后台时遇到过一个问题，除了登录页面，其他的请求都是要携带token值的，这个已经在自己封装的axios的拦截器中进行处理过，但是element-ui中的upload组件他自己有自己封装的ajax请求方式，没有用到我自己封装的，所以向后台API发送数据的时候前端看的效果是已经上传成功了，但是查看网络请求的时候并没有成功，返回的状态码是400，无效的token，仔细查看了一下官方文档，提供了header这个属性，可以将自己的定义的请求头加里边，然后就可以了。

## 项目优化

在zekshop项目中，TypeNav组件中需要写很多的a标签，刚开始是用的router-view组件，但是组件特别多，特别耗内存，每个链接都是一个组件，反映在页面上就是当划过这些链接时，会有卡顿现象，所以将router-view改为a标签，然后通过编程式导航进行跳转，这样会流畅很多。

但是编程式导航还不是最好的解决，每个a标签上都添加一个click事件，那么内存中也会放很多的函数，也是比较占内存，所以就通过事件委派的方式给a标签的父元素添加点击事件。