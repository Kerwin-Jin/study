# Web前端菜鸟蜕变大神

## 数组方法

### 循环遍历

```js
<script type="text/javascript">
	var arr = ['kerwin','superman','batman','Tony','Stack'];
	
	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}
	
	for(index in arr){
		console.log(arr[index])
	}

    arr.forEach((item,index)=>{
        console.log(item+'====='+index);
    })
</script>
```

### indexOf()

查找数组中是否包含某个元素

```js
<script type="text/javascript">
	var arr = ['kerwin','superman','batman','Tony','Stack'];
	
	var res = arr.indexOf('batmafn');
	
	if(res!=-1){
		console.log('存在','位置为：',res+1);
	}else{
		console.log('不存在');
	}
</script>
```

### join()

把数组的各个元素，拼接成字符串

```js
<script type="text/javascript">
	var arr = ['kerwin','superman','batman','Tony','Stack'];
	
	arr = arr.join('>');
	console.log(arr);
</script>
```

### reverse()

翻转数组

### splice()

添加或删除元素

### slice()

截取数组的某段元素，返回一个新的数组

### push()

往数组的最末尾加一个元素

### pop()

删除数组最末尾一个元素

### unshift()

往数组最前面添加一个元素

### shift()

删除数组最前面一个元素

## 字符串方法

### trim()

去除字符串两边的空白

```js
<script type="text/javascript">
	var str = ' hello ';
	console.log(str.length)
	console.log((str.trim()).length);
</script>
```

### split()

把字符串变成数组，与数组的方法join()方法是一对

```js
<script type="text/javascript">
	var str = 'hello#world#haha#nihao';
	var arr = str.split("#");
	console.log(arr);
</script>
```

### substr(m, n)

字符串截取，从m开始，截取n个

```js
<script type="text/javascript">
	var str = 'hellojavascript';
	var newStr = str.substr(3,4);
	console.log(newStr);
</script>
```

### slice()



## 全面掌握5大BOM操作

### 1、Window窗口对象

| 方法       | 说明                                                     |
| ---------- | -------------------------------------------------------- |
| alert()    | 弹出框                                                   |
| confirm()  | 确认框，确定为true，取消为false                          |
| prompt()   | 问答对话框，可提示用户进行输入的对话框，返回输入的字符串 |
| open()     | 打开一个新的窗口                                         |
| close()    | 关闭窗口，注意：只能关闭自己打开的窗口                   |
| resizeTo() | 修改窗口大小                                             |
| resizeBy() | 增加窗口大小                                             |
| moveTo()   | 移动到指定的位置                                         |
| moveBy()   | 增加窗口的位置                                           |

```js
<script type="text/javascript">
	var window = window.open('https://www.baidu.com','_blank','width=200,height=200,top=100')	//返回一个window对象
</script>
```



### 2、History对象

| 方法               | 说明                                                    |
| ------------------ | ------------------------------------------------------- |
| history.back()     | 后退                                                    |
| hisroty.forward()  | 前进                                                    |
| history.go(number) | 1表示前进一步，2表示前进两步，-1表示倒退一步，0代表刷新 |



### 3、document文档对象



### 4、Location跳转对象

| 属性              | 说明                                |
| ----------------- | ----------------------------------- |
| location.href     | 返回当前完整的url                   |
| location.host     | 返回当前的主机名                    |
| location.pathname | 返回当前url的路径部分               |
| location.port     | 返回当前url的端口号                 |
| location.hash     | 返回当前的锚部分（从#号开始的部分） |
| search            | 返回当前的url的（问号之后的部分）   |

| 方法      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| assign()  | 加载新的文档                                                 |
| reload()  | 重新加载当前文档，相当于按浏览器上的“刷新”，如果参数为true，表示强制刷新 |
| replace() | 用新的文档替换当前文档，相当于按浏览器上的“刷新”             |

### 5、Screen屏幕对象

| 属性               | 说明         |
| ------------------ | ------------ |
| screen.availHeight | 可用屏幕高度 |
| screen.availWidth  | 可用屏幕宽度 |
| screen.width       | 电脑屏幕宽度 |
| screen.height      | 电脑屏幕高度 |

## offset、scroll、client三大家族

### offset

| 属性             | 说明                       |
| ---------------- | -------------------------- |
| div.offsetWidth  | 宽度：元素内容+内边距+边框 |
| div.offsetHeight | 高度：元素内容+内边距+边框 |
|                  |                            |

div.style.width与div.offsetWidth的区别：

1、style.widht的返回值是一个带有单位的字符串，offsetWidth返回的是一个数值

2、style.width如果想要获取，必须使用内联样式，offsetWidth无论在哪里都可以获取

3、style.width可以赋值，offsetWidht不可以赋值

4、style.width值的是元素内容，offsetWidth值元素内容+内边距+边框

总结：style.widht更擅长于赋值，offsetWidth更擅长于取值













