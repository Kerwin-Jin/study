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
            console.log('不IE');		//不是IE的浏览器
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



#### DOM加载过程

1. 解析HTML结构
2. 加载外部脚本和样式表文件
3. 解析并执行脚本代码
4. DOM树构建完成     //onDOMContentLoaded事件执行
5. 加载图片等外部资源
6. 页面加载完毕          //onload事件执行



### 事件

#### DOM0级事件处理程序

1. 添加方式

   方式一：元素节点.on事件名称 = function(){};

   方式二：元素节点.on事件名称 = 事件处理函数名称（注意函数名后不加括号）

2. 删除方式

   元素节点.on事件名称 = null;

3. this的使用：DOM0级事件处理程序中this的使用：在其对应的事件处理函数中直接使用this即可，这个this代表的就是当前事件应用到的元素。

4. 注意：如果一个元素被添加了多个相同的事件，那么后添加的事件会覆盖掉前面的事件；

```js
<script type="text/javascript">
	
	
	var box = document.querySelector("#box");
	// box.onclick = function(){
	// 	console.log(111);
	// }
	
	box.onclick = getInfo;		//注意，这里只写函数名字，不加括号，加括号就直接执行了，这里相当于把函数体加到后面了
	
	function getInfo(){
		console.log(111);
        box.onclick = null;		//如何让函数只执行一次，利用该语句让点击事件执行完一次之后置空就可以了
	}
	
	// box.onclick = null;		//删除事件
</script>
```

#### DOM2级事件处理程序

> https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=457

1. 添加方式：

   元素节点.addEventListener(参数1,参数2,参数3)

2. 参数说明：

   参数1表示事件名称，

   参数2表示事件处理函数，可以是匿名函数，也可以是有名函数（不需要带括号）

   参数3表示事件流，值为true（事件捕获）、false（默认，冒泡事件）

3. 删除方式：元素节点.removeEventListener(参数1,参数2,参数3)，参数说明：如上。如果说事件被删除，那么添加事件的时候不可以是匿名函数，只能是函数名称

4. 注意：

   - DOM2级事件处理程序不使用与IE8及以前的浏览器
   - 如果一个元素身上通过DOM2级事件处理程序添加了多个相同的事件，那么这些事件可以同时存在

5. DOM2级事件处理程序中this的使用：在其对应的事件处理函数中直接使用this即可，这个this代表的就是当前事件应用到的元素。

```js
<script type="text/javascript">
	
	
	var box = document.querySelector("#box");
	
	box.addEventListener("click",getInfo,false)
	
	function getInfo(){
		console.log(this.innerHTML);
	}

	//box.addEventListener("click",getInfo,false)
</script>
```

#### 事件流

所谓事件流，简单说就是页面中事件的执行顺序，可以分为两个部分：事件冒泡、事件捕获

- 事件冒泡：从当前元素开始逐步向外扩展（即向根节点），简单说，事件的执行顺序是从小到大，或从内向外。
- 事件捕获：从根节点开始逐步向当前元素扩展，简单说，事件的执行顺序是从大到小，或从外向内。

#### 事件对象

##### 获取

1. 什么是事件对象？事件对象是JS的一个内置对象，该对象记录了和当前事件相关的信息，另外事件对象也提供了大量的 属性和方法帮助我们操作事件
2. 事件对象的获取
   - 谷歌浏览器：事件对象被以形参的形式传递给事件处理函数
   - IE8及一下低版本浏览器：可以使用window对象的event属性来获取，格式：window.event

```js
<script type="text/javascript">
    //谷歌和IE的兼容写法
	var box = document.getElementById("box");
	box.onclick = function(e){
		e = e || window.event;
		console.log(e);
        
        console.log(e.type)		//获取事件的类型
	}
</script>
```

##### 常用属性

e.type    事件类型

e.altKey、e.ctrlKey、e.shiftKey    结果返回true和false

```js
if(e.ctrlKey && e.altKey){
    console.log('同時按了ctrl和alt');
}
```

e.keyCode   键码值

e.screenX , e.screenY : 获取鼠标点击的点距离屏幕左侧和顶端的距离

e.clientX , e.clientY : 获取鼠标点击的点距离**视口**左侧和顶端距离，不受滚动条影响

e.pageX , e.pageY : 获取鼠标点击的点距离**页面**左侧距离和页面顶端距离，pageX,pageY受滚动条影响

e.offsetX , e.offsetY :  获取光标相对于**目标元素**边界的X、Y坐标

```js
<script type="text/javascript">
	
	var box = document.getElementById("box");
	
	document.onkeydown = function(e){
		console.log(e.ctrlKey);
		console.log(e.shiftKey);
		console.log(e.altKey);
        //console.log(e.keyCode); 
		
		if(e.ctrlKey && e.altKey){
			console.log('同時按了ctrl和alt');
		}
	}
</script>
```

**e.currentTarget** : currentTarget属性表示哪个元素的事件被触发了（谁身上的事件被触发了），

```html
<body>
    
	<ul>
		<li data='1'>我是第1个</li>
		<li data='2'>我是第2个</li>
		<li data='3'>我是第3个</li>
		<li data='4'>我是第4个</li>
		<li data='5'>我是第5个</li>
	</ul>
	
</body>
<script type="text/javascript">
	var ul = document.getElementsByTagName('ul')[0];
	document.onclick = function(e){
		e = e || window.event;
		console.log(e.currentTarget);
	}
	ul.onclick = function(e){
		e = e||window.event;
		console.log(e.currentTarget);
	}
</script>
```

如上例子：当每个li被点击的时候，ul和document的每个事件都会被触发，遵循向上冒泡的原则

**e.target** : target属性的作用就是获取当前哪个元素被点击了（点击到谁身上了），IE中使用e.srcElement获取

```html
<body>
	<ul>
		<li data='1'>我是第1个</li>
		<li data='2'>我是第2个</li>
		<li data='3'>我是第3个</li>
		<li data='4'>我是第4个</li>
		<li data='5'>我是第5个</li>
	</ul>
</body>
<script type="text/javascript">
	var ul = document.getElementsByTagName('ul')[0];
	ul.onclick = function(e){
		e = e||window.event;
        var myTarget = e.target || e.srcElement		//处理兼容性问题
		console.log(myTarget.innerHTML);
	}
</script>
```

如上例子，我们在ul上绑定了事件，当点击 li 的时候，返回的就是 li 而不是 ul

##### 常用方法

**e.preventDefault()**

作用：取消默认行为，所谓默认行为就是指页面中元素的某些默认功能，如超链接、提交、重置等

格式：事件对象.preventDefault();

注意：低版本IE不支持该方法，通过e.returnValue=false设置

```html
<body>
	<a href="https://www.baidu.com">跳转到百度</a>
</body>
<script type="text/javascript">
	var link = document.getElementsByTagName('a')[0];
    
    
    //兼容写法
	link.onclick = function(e){
		e = e||window.event;
		
		if(e.preventDefault == undefined){
			e.returnValue = false;		//IE
			console.log("IE")
		}else{
			e.preventDefault();			//谷歌			
			console.log("Chrome");
		}
        
        
        //兼容写法2
        //e.preventDefault==undefined ? (e.returnValue = false):e.preventDefault();
	}
</script>
```

案例：取消页面的右击菜单

```js
<script type="text/javascript">
		
	document.oncontextmenu = function(e){
		e = e||window.event;
		
		e.preventDefault==undefined?(e.returnValue=false):e.preventDefault();
		console.log(e);
	}
</script>
```

**e.stopPropagation()**

作用：取消冒泡

兼容写法：

e.stopPropagation == undefined?(e.cancelBubble = true) : e.stopPropagation();



##### 鼠标事件

onclick(单击事件)、ondblclick(双击事件)

onmouseover、mouseout : 如果有后代元素，那么在进入到后代元素再进入到自身时会多次触发该事件，具有冒泡特性

onmouseenter、onmouseleave : 如果有后代元素，不回重复触发，这两个事件不具有冒泡特性

onmousedown、onmouseup : 事件只触发一次

onmousemove : 该事件会重复触发

##### 表单事件

onfocus、onblur、oninput、onchange

```html
<body>
	姓名：<input type="text" name="" id="" value="" /><span id="info" style="display: none;"></span>
</body>
<script type="text/javascript">
	var input = document.getElementsByTagName('input')[0];
	input.onfocus = function(e){
		console.log(e.path);
		var span = document.getElementById("info");
		var info = "请输入5-10位字母作为用户名";
		span.innerHTML = info;
		span.style.display = 'inline';
	}
	input.onblur = function(e){
		var val = input.value;
		if(!val){
			alert("请输入用户名！");
			return;
		}
		console.log('diaoyong jiekou')
	}
    
    //当输入内容发生变化时触发该番薯
    input.oninput = function(){
        console.log(this.value);
    }
    
    //当表单失去焦点并且内容发生变化时，触发该事件
    input.onchange = function(){
        console.log("changed");
    }
</script>
```

onsubmit事件：当提价按钮被点击的时候触发，注意该事件需要给form元素添加，该事件可以被用来阻断数据的提交，如果该事件对应的事件处理函数返回值为false，那么就会阻断提交。

onreset事件：当重置按钮被点击时触发，注意该事件也是给form元素添加。

```html
<body>
	<form action="" method="">
		<input type="submit" value="提交" />
		<input type="reset" value="重置" />
	</form>
</body>
<script type="text/javascript">
	
	var form = document.querySelector("form");
	
	//这里注意，是给form表单添加事件
	form.onsubmit = function(){
		alert('提交了');
		console.log("提交了");
	}
	
	form.onreset = function(){
		console.log("重置了");
	}
</script>
```

##### 键盘事件

keyup、keydown、keypress

```js
<script type="text/javascript">
	
	document.onkeypress = function(e){
		e = e || window.event;
		
		console.log(e.keyCode);
	}
</script>
```

##### scroll事件

当对滚动条进行滚动的时候触发该事件，某个元素可以触发，窗口也可以触发

```js
<script type="text/javascript">
	
    //给一个div添加scroll事件
	document.querySelector("#box").onscroll = function(e){
		console.log(e);
	}
	
	//给窗口添加scroll事件
	window.onscroll = function(e){
		console.log(111);
	}
</script>
```

一般，onscroll结合scrollTop和scrollLeft使用，比如回到顶部就是用这种方式

```js
document.querySelector("#toTop").onclick = function(){
	document.documentElement.scrollTop = 0;
}
```

需要注意的是：在使用scrollTop和scrollLeft时需要注意：在拉动窗口的滚动条时，如果要获取被卷上去的内容的高度，那么不可以使用window.scrollTop，因为window对象没有scrollTop和scrollLeft属性，此时如果要获取scrollTop或scrollLeft的值，需要

document.documentElement.scrollTop || document.body.scrollTop

```js
window.onscroll = function(){
	var obj = document.documentElement || document.body;
	console.log(obj.scrollTop);
}
```

##### bubbles属性

bubbles属性的作用就是用来判断当前事件是否支持事件冒泡，如果是结果为true，如果不是结果为false

例如，onclick事件就是冒泡事件，onmouseenter就不是冒泡事件

```js
<script type="text/javascript">
	var box = document.querySelector("#box");
	box.onclick = function(e){
		
		console.log("点击事件被触发了");
		console.log(e.bubbles);		//true
	}
	
	box.onmouseenter = function(e){
		console.log("鼠标移入事件被触发了");
		console.log(e.bubbles);		//false
	}
</script>
```

##### eventPhase属性

该属性的值为1、2、3

1：表示由于事件捕获而引起的事件的执行

2：表示事件流中的当前元素

3：表示由于事件冒泡而引起的事件的执行

```js
<script type="text/javascript">
	var box = document.querySelector("#box");
	box.onclick = function(e){
		console.log(e.eventPhase);
	}
</script>
```

##### button属性

作用是判断点击了鼠标的哪个按钮

0：表示左键，1：表示中间键，2：表示右键

```js
<script type="text/javascript">
	document.documentElement.onclick = function(e){
		console.log(e.button);
	}
	
	document.oncontextmenu = function(e){
		console.log(e.button);
	}
</script>
```

##### mousewheel事件

该事件为鼠标滚动事件，其事件对象中button属性的值为0，wheelDelta属性表示滚动的方向，如果是负值表示向下滚动，如果是正值表示向上滚动

```js
<script type="text/javascript">
	document.onmousewheel = function(e){
		// console.log(e.type);
		console.log(e.wheelDelta);		//e.wheelDelta属性的值在不同的浏览器下面返回的值不同，如果是负值表示向下滚动
		if(e.wheelDelta>0){
			console.log("你向上滚动了");
		}else{
			console.log("你向下滚动了");
		}
	}
</script>
```

##### onload事件（重要）

当文档中所有的节点都加载完毕后触发该事件，如文档中的所有图片加载完成（即能够正常显示），通常这个事件是给window对象添加的

```js
<script type="text/javascript">
	window.onload = function(){
		console.log('文档内容和节点都加载完成了');
	}
</script>
```

##### onDOMContentLoaded事件

该事件和load事件类似，但是该事件触发的时间要早于load事件，因为该事件会在ODM树渲染完毕后触发，而load事件只有在整个文档加载完毕后触发

注意：该事件需要使用addEventListener方法来添加。

```js
<script type="text/javascript">
	window.onload = function(){
		console.log('文档内容和节点都加载完成了');
	}
	
	window.addEventListener('DOMContentLoaded',function(){
		console.log('DOM节点加载完成了！');
	},false)
</script>
```

##### onreadystatechange事件

该事件为文档加载状态判断事件。

众所周知，document节点中有一个属性叫做readyState，拥有三个值

loading：加载DOM中

interactive：加载外部资源

complete：加载完成

而readyStateChange事件正是在这个状态发生改变时调用的事件



##### 移动端事件

ontouchstart：当手指触摸到屏幕或指定元素时触发

ontouchmove：当手指在屏幕或指定元素上移动时触发

ontouchend：当手指从屏幕或指定元素离开时触发

ontouchcancel：当系统停止跟踪触发时触发（如电话接入或者弹出信息，一般在这个操作中做一些暂停游戏类的操作，或者点击通知）

```js
<script type="text/javascript">
	
	var box = document.querySelector("#box");
	box.ontouchstart = function(e){
		console.log(e.type);
	}
	box.ontouchmove = function(e){
		console.log(e.type);
	}
	
	box.ontouchend = function(e){
		console.log(e.type);
	}
	
</script>
```

TouchEvent对象中我们需要记住的三个属性

touches: TouchList{0: Touch, length: 1}，该属性主要保存放到屏幕上的所有触摸点的相关信息

targetTouches: TouchList{0: Touch, length: 1}，该属性主要保存了和当前元素相关的触摸点信息

changedTouches: TouchList{0: Touch, length: 1}，该属性主要保存了由触摸点变化形成的信息，触摸点从无到有或从有到无都会别记录下来



#### 事件委托（重点）

> https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=495

事件委托/事件代理：就是利用【事件冒泡】，自己本身做不了的事，让上级来做这个事情，只指定一个事件处理程序，就可以管理某一类型的所有事件。

事件委托就是指将事件委托给祖先元素，然后利用事件冒泡机制和事件对象让该祖先元素下面的所有后代元素可以具有同一类型的事件。

具体事例：

点击li的时候，显示li的内容

```js
<body>
	<div id="box">
		<ul id="list">
			<li>我是1个元素</li>
			<li>我是2个元素</li>
			<li>我是3个元素</li>
			<li>我是4个元素</li>
			<li>我是5个元素</li>
		</ul>
	</div>
</body>
<script type="text/javascript">
    
    // 使用事件委托实现
	var ul = document.querySelector("#list");
	ul.onclick = function(e){
		console.log(e.target.innerHTML);
	}
	
	//不使用事件委托实现方法
	var lis = document.querySelectorAll('li');
	lis.forEach(item=>{
		item.onclick = function(){
			console.log(this);
		}
	})
</script>
```

事件委托的好处：

上边的例子中，如果我们不使用事件委托的方式，当在每个li绑定click事件之后，如果再新加li元素，那么新加的元素就不回有点击事件，如果用了事件委托，那么新加的li也会向上冒泡，就触发ul的点击事件，从而可以打印li的内容。

### BOM

最初由网景公司提出，Browser Object Model浏览器对象模型，它不是一个对象，可以说它时一个对象的集合，里面有很多对象，利用这些对象可以操作浏览器和浏览器中的内容，主要包含如下对象：widnow、location、history、screen、navigator、document等，在众多属性中window属性是BOM中的顶级对象，其他对象都是window对象的属性，只不过这些属性本身也是对象类型。

#### window对象

> https://www.bilibili.com/video/BV1Xz4y1S7Zd?p=497

1. window对象：window对象是BOM中的顶级对象，其他对象是window对象的一个属性，
2. window对象也是一个全局对象，因为在全局作用域下面定义的所有变量，方法都相当于给window对象绑定的属性或方法，可以使用window的形式来使用这些属性和方法，在平时使用时可以将.`window.` 省略。
3. 此外，如果是全局的变量或方法，还可以使用`this.` 的形式来调用，因为在全局环境下window == this。
4. window对象不需要手动创建，当浏览器窗口被打开时，后天会自动创建一个用来管理当前窗口的window对象。当浏览器窗口被关闭时，该对象会被自动销毁。

```js
<script type="text/javascript">
    
	var aaa = 'hello';		//全局变量
	
	//全局函数
	function fn(){
		console.log(12);
	}
	
	console.log(window.aaa);
	window.fn();

	console.log(window === this)   //true
</script>
```

#### window对象常用方法

alert方法：支持转义字符，不支持标签

```js
<script type="text/javascript">
	
	alert('<li>hello</li>');
	alert('<li>\nhello\n</li>');
</script>
```



confirm方法：确定返回true，取消返回false

```js
<script type="text/javascript">
	
	var res = window.confirm("确定要删除吗？");
	console.log(res);
</script>
```



prompt方法：返回值为字符串

```js
<script type="text/javascript">
	
	var str = window.prompt("请输入您的年龄");
	console.log(str);
</script>
```



isNaN方法：	判断参数是否为NaN，如果是NaN，返回true，否则返回false

isFinite方法：判断参数是否为有限数值

```js
<script type="text/javascript">
	
	var a = 3*"a";
	console.log(a);
	
	console.log(isNaN(a));
	console.log(isFinite(1/5));
</script>
```

