# Web前端菜鸟蜕变大神



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













