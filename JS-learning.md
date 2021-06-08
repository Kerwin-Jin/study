### 浏览器引擎

2013年以前，代表有Trident(IE),Gecko(firefox),Webkit(Safari Chrome)等以及Presto(Opera)。2013年以后，谷歌开始研发blink引擎，Chrome28以后开始使用，而Opera则放弃了自主研发的Presto引擎，投入谷歌怀抱，和谷歌一起研发blink引擎，国内各种chrome系的浏览器（360、UC、QQ、2345）也纷纷放弃webkit，投入blink的怀抱。

| 浏览器               | 内核                                          |
| -------------------- | --------------------------------------------- |
| IE                   | Trident                                       |
| Chrome               | 以前是webkit，现在是blink                     |
| Firefox              | Gecko                                         |
| Safari               | webkit                                        |
| Opera                | 最初是自己的Presto，后来是webkit，现在是blink |
| 360、猎豹            | IE+Chrome双内核                               |
| 搜狗、遨游、QQ浏览器 | Trident（兼容模式）+Webkit（高速模式）        |
| 百度、世界之窗       | IE内核                                        |
| 2345浏览器           | 以前是IE，现在是IE+Chrome双内核               |

### 数据类型

**基本数据类型**

数值型（Number）：正数、负数、浮点数、NaN、0、Infinity、-Infinity

字符型（String）

布尔型（Boolean）

Undefined型（undefined）

Null型（null）

**引用数据类型**

对象Object

数组Array

函数Function

### 函数

#### 回调函数

一个函数被当做另一个函数的参数，那么这个被作为参数的函数就是回调函数。

Array的sort函数，如果不传参，它会把数组元素先转成字符串，然后按照字符串的比较规则去排序。

```js
<script type="text/javascript">
	var arr = [1,2,15,17,0,8];
	
	arr.sort();
	
	console.log(arr);

	
	var arr = [1,2,15,17,0,8];
		
    arr.sort(function(a,b){
        return a-b;
    });

    console.log(arr);
</script>
```



### 数组

### 字符串

#### 方法

es6新增方法

**includes**

```js
var str = "hello world!";
console.log(str.includes('wor'));
console.log(str.includes('wr'));
```

**startWith、endWith**

```js
<script type="text/javascript">
	var str = "https://www.rhzhixin.com";
	console.log(str.startsWith('https'));
	console.log(str.endsWith('.cn'));
</script>
```

**repeat**

```js
<script type="text/javascript">
	var str = "abcd";
	var newStr = str.repeat(3);
	console.log(newStr);
</script>
```

es7新增方法

**padStart**

```js
<script type="text/javascript">
	var str = "abcd";
	var newStr = str.padStart(10,'-');
	var newStr2 = str.padEnd(10,'*');
	console.log(newStr);
	console.log(newStr2);
</script>
```

#### **字符串编码与解码**

### DOM

#### 节点相关

**nodeType**

元素节点：1

属性节点：2

文本内容：3

注释节点：8

文档节点：9

**nodeName**

元素节点：标签名（DIV）

属性节点：属性名

文本内容：#text

注释节点：#comment

文档节点：#document

**nodeValue**

元素节点：null

属性节点：value

文本内容：文本内容

注释节点：注释内容

文档节点：null

```html
<body>
	<div id="box" title="hello">我是一个div</div><!--我是注释-->
</body>
<script type="text/javascript">
	var divObj = document.querySelector("#box");
	console.log(divObj);
	console.log(divObj.nodeType);
	console.log(divObj.nodeValue);
	
	var attrObj = divObj.getAttributeNode('id');
	console.log(attrObj);
	console.log(attrObj.nodeType);
	console.log(attrObj.nodeName);
	console.log(attrObj.nodeValue);
	
	
	var text = divObj.firstChild;
	console.log(text.nodeType);
	console.log(text.nodeName);
	console.log(text.nodeValue);
	
	var comment = divObj.nextSibling;
	console.log(comment);
	console.log(comment.nodeType);
	console.log(comment.nodeName);
	console.log(comment.nodeValue);
	
	
	console.log(document.nodeType);
	console.log(document.nodeName);
	console.log(document.nodeValue);
</script>
```

#### 获取元素

- 通过getELement

getElementById()

getElementsByTagName() 注意 ： 获取的不是数组，是类似数组的结构，可以通过**Array.isArray()**方法验证

getElementsByName() 通过标签的name属性获取元素，用于获取表单元素

getElementsByClassName()

- 通过选择器

querySelector()				只能返回符合选择器的第一个元素

querySelectorAll()			能返回符合选择器的所有元素



**getElement和querySelector的区别**

- querySelector返回的结果是NodeList类数组

  getElement返回的是HTMLCollection类数组

- query选择符选出来的元素及元素数组是静态的，而getElement这种方式选出的元素是动态的。

  静态的就是或选出的所有元素的数组，不会随着文档操作而改变，在使用的时候getElement这种方法性能更好一些，query选择符则更方便一些

#### 内容操作

- innerHTML      可以添加，也可以获取，可以内容中的标签
- innerTxext      可以添加内容，也可以获取内容，无法解析内容中的标签
- textContent    可以添加内容，也可以获取内容，只将文本内容获取出来，有多层标签的话也只获取里边的文本内容，不解析标签

- value  适用于表单元素，可以添加内容，也可以获取内容

#### 属性操作

**获取属性**

- 方法1，获取所有属性

```js
<script type="text/javascript">
	var div = document.querySelector("#box");
	var attrs = div.attributes;
	console.log(attrs);
</script>
```

- 方法2，获取某个属性节点

```js
//获取节点
<script type="text/javascript">
	var div = document.querySelector("#box");
	var attrNode = div.getAttributeNode('id');
	// var value = attrNode.nodeValue
	console.log(attrNode);
	// console.log(value);
</script>


//获取值
<script type="text/javascript">
	var div = document.querySelector("#box");
	var attrValue = div.getAttribute('id');
	console.log(attrValue);
</script>

//利用点语法
<script type="text/javascript">
	var div = document.querySelector("#box");
	var res = div.title			// 点语法
    var res = div['title']		// 中括号
	console.log(res);
</script>
```

**关于自定义属性**

只有**getAttribute()** 可以获取自定义属性的值，点语法和中括号方式都不支持



**修改属性**

1. setAttribute方法设置属性值，格式：元素节点.setAttribute('属性名称','属性值')

   ```html
   <body>
       <div id="box" title="hello">我是一个div</div><!--我是注释-->
   </body>
   <script type="text/javascript">
   	var div = document.querySelector("#box");
   	div.setAttribute('title','world');		//修改已有属性title
   	div.setAttribute('data-name','world')	//添加没有的属性data-name
   </script>
   ```



















