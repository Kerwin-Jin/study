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

setAttribute方法设置属性值，格式：元素节点.setAttribute('属性名称','属性值')

```html
<body>
    <div id="box" title="hello">我是一个div</div><!--我是注释-->
</body>
<script type="text/javascript">
	var div = document.querySelector("#box");
	div.setAttribute('title','world');		//修改已有属性title
	div.setAttribute('data-name','world')	//添加没有的属性data-name
    
    
    div.title = 'world'      //点语法
    div['title'] = 'world!'  //中括号
</script>
```

**删除属性**

```html
<body>
    <div id="box" style="width: 100px;height: 100px;background-color: aqua;font-size: 20px;">Hello</div>
</body>
<script type="text/javascript">
	var div = document.querySelector('#box');
	
	div.removeAttribute('id');
</script>
```



#### 获取/设置class

```html
<style>
	.a{
		width: 100px;
		height: 100px;
	}
	.b{
		background-color: red;
	}
	.c{
		background-color: blue;
	}
</style>
<body>
	<div id="box" title="hello" class="a b">我是一个div</div><!--我是注释-->
</body>
<script type="text/javascript">
	var div = document.querySelector("#box");
	console.log(div.className);		//如果使用点语法操作类，那么不可以直接写class，需要使用className
	
	
	div.className = 'c';			//设置class
	div['className'] = 'a c';		//设置class  使用中括号和点语法不可以直接写class，需要使用className
	
	console.log(div.getAttribute('class'));				//通过getAttribute获取class直接写class就行，不需要写成className
	console.log(div.setAttribute('class','a b'));
	
</script>
```

#### checked和selected

如果要使用js操作表单元素中的checked和selected属性，注意：属性值需要设置为true、false，不要写成checked = 'checked'这样

true表示选中

false表示取消选中

```html
<body>
	<input type="checkbox" name="city" value="beijing"/>北京
	<input type="checkbox" name="city" value="shagnhai" />上海
	<input type="checkbox" name="city" value="guagnzhou"/>广州
</body>
<script type="text/javascript">
	var inputs = document.getElementsByTagName('input');
	for(var i=0;i<inputs.length;i++){
		inputs[i].checked = true;
	}
</script>
```

#### 节点关系

页面中的节点不是孤立的，是有关系的，常见的关系如下

1. childNodes: 所有子节点
2. firstChild: 第一个子节点
3. lastChild: 最后一个子节点
4. parentNode: 父节点
5. nextSibling: 后一个兄弟节点
6. previousSibling: 前一个兄弟节点 

！通过这些属性获取的包括换行，所以ul.firstChild得到的是#text而不是第一个li

```html
<body>
    <ul>
    	<li>woshi1ge</li>
    	<li>woshi2ge</li>
    	<li>woshi3ge</li>
    	<li>woshi4ge</li>
    	<li>woshi5ge</li>
    </ul>
</body>
<script type="text/javascript">
	var ul = document.querySelector('ul');
	var childs = ul.firstChild.nextSibling;
	console.log(childs);
</script>
```

1. childNodes: ---------children
2. firstChild: ----------firstElementChild
3. lastChild: ---------lastElementChild
4. parentNode: ---------parentElement
5. nextSibling: ---------nextElementSibling
6. previousSibling: ------------previousElementSibling

```html
<body>
    <ul>
    	<li>woshi1ge</li>
    	<li>woshi2ge</li>
    	<li>woshi3ge</li>
    	<li>woshi4ge</li>
    	<li>woshi5ge</li>
    </ul>
</body>
<script type="text/javascript">
	var ul = document.querySelector('ul');
	var firstLi = ul.firstElementChild
	console.log(firstLi);
</script>
```

#### 特殊节点

| 获取                   | 代码                                                  |
| ---------------------- | ----------------------------------------------------- |
| **获取html节点**       | document.documentElement                              |
| **获取body节点**       | document.body                                         |
| **获取head节点**       | document.head                                         |
| 获取title节点          | document.title                                        |
| 设置title              | document.title = 'hello'                              |
| 获取uri                | document.documentURI                                  |
| 对uri进行解码          | console.log(decodeURIComponent(document.documentURI)) |
| 获取URL                | document.URL                                          |
| 获取域名               | document.domain                                       |
| 获取文档加载的三个阶段 | document.readyState                                   |

三个阶段分别是loadding、interactive、complete

loading表示正在加载html文档，interactive表示加载外部资源，complete表示完成

| 获取                               | 代码             |
| ---------------------------------- | ---------------- |
| 获取页面中所有具有name属性的超链接 | document.anchors |
| 获取页面中所有的form节点           | document.forms   |
| 获取页面中所有img节点              | document.images  |
| 获取页面中带有href属性的超链接     | document.links   |
| 获取页面中所有的script节点         | document.scripts |

#### DOM操作行内样式

如果要使用DOM操作行内样式，可以使用元素节点的style属性来操作，返回的是CSS样式声明(CSSStyleDeclaration) **对象**，这个对象中有我们设置的CSS样式

获取CSS样式声明对象：div.style，这个对象中包含所有css的属性，是一些键值对，我们可以通过操作这个对象来操作样式

```html
<body>
    <div id="box" style="width: 100px;height: 100px;background-color: aqua;font-size: 20px;">Hello</div>
</body>
<script type="text/javascript">
	var div = document.querySelector('#box');
	console.log(div.style);			//输出为CSSStyleDeclaration
    console.log(parseInt(div.style.width));
	console.log(div.style.fontSize);	//如果CSS属性名称由横线连接多个单词，那么要采用驼峰命名
    console.log(div.style.cssText);		//返回值为所有行内样式形成的字符串
</script>
```

此外，CSS样式声明对象还提供了三个方法用来获取、设置、移除样式属性

```js
<script type="text/javascript">
	var div = document.querySelector('#box');
	
	console.log(div.style.getPropertyValue('background-color'));	//获取属性，注意：用他内置的方法时不需要用驼峰命名法
	div.style.setProperty('height','50px');
	div.style.removeProperty('background-color');
	
</script>
```

#### DOM操作外部样式

获取内部样式和外部样式的兼容写法

```js
<script type="text/javascript">
	
	var box = document.getElementById('box')
	function getStyle(ele,className){
		if(window.getComputedStyle){
            console.log('是IE');		//不是IE的浏览器
			return window.getComputedStyle(ele,null)[className];		//不是IE
		}else{
			console.log('是IE');		
			return ele.currentStyle[className];		//是IE
		}
	}
	
	var style = getStyle(box,'width');
	console.log(style)
</script>
```

#### DOM常用方法

创建节点：document.createElement('标签名称')

添加节点：appendChild('节点对象')

```js
<script type="text/javascript">
	var divObj = document.createElement('div');
	console.log(divObj);
	divObj.innerHTML = 'Hello World!';
	document.body.appendChild(divObj);
</script>
```

插入节点：insertBefore()

```js
<body>
    <ul>
    	<li>我是1个节点</li>
    	<li>我是2个节点</li>
    	<li>我是3个节点</li>
    	<li>我是4个节点</li>
    	<li>我是5个节点</li>
    </ul>
</body>
<script type="text/javascript">
	var newLi = document.createElement('li');
	newLi.innerHTML = "我是新插入的节点";
	var ul = document.querySelector('ul');
	var lis = ul.querySelectorAll('li');
	ul.insertBefore(newLi,lis[3]);		//插入节点
</script>
```

#### DOM常用属性

offsetParent：返回该元素的参照元素（父节点有定位属性的元素）

```js
<script type="text/javascript">
	var ul = document.querySelector('li');
	var res = ul.offsetParent;
	console.log(res);
</script>
```

offsetTop：距离偏移对象顶部的距离

offsetLeft：距离偏移对象左边的距离

offsetWidth：返回元素的宽度（不包括外边距）

offsetHeight：返回元素的高度（不包括外边距）

clientWidth：返回元素宽度（不包括边框和外边距）

clientHeight：返回元素高度（不包括边框和外边距）

### 事件







