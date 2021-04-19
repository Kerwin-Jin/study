## NPM包管理工具

### 什么是npm？

npm(Node Package Manager，node包管理器)，是node.js默认的，以JavaScript编写的软件包管理工具

### 安装

安装好node之后，会默认安装好npm。npm本身也是Node.js开发的软件

node中文官网：

> http://nodejs.cn/



查看仓库的地址

$ npm config get registry

设置仓库的地址

$ npm config set registry https://registry.npm.taobao.org/ --global

查看npm的仓库地址都有哪些？`nrm ls`，可以看到有7个地址，这里使用的是淘宝的地址

```
$ nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

切换至其他源 `nrm use taobao` 

```
$ nrm use taobao
   Registry has been set to: https://registry.npm.taobao.org/
$ nrm ls
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

### 基本使用

#### 安装|查看|删除|更新

```
# 安装jquery
$npm install jquery	
# 可以缩写
$npm i jquery

# 安装bootstrap
$npm install bootstrap

# 全局安装 加-g参数
$npm install jquery -g
```

查看当前项目下的包

$npm list

查看某个包的信息

$npm list jquery

查看全局的包

$npm list -g

安装指定版本的包 `npm i jquery@3.0.0`

```
$ npm i jquery@3.0.0
	+ jquery@3.0.0
	updated 1 package in 1.947s
	1 package is looking for funding
  	run `npm fund` for details
$ npm list
	D:\desktop\Study\学习笔记\eduwork
	+-- bootstrap@4.6.0
	+-- jquery@3.0.0
	`-- UNMET PEER DEPENDENCY popper.js@^1.16.1
```

卸载包（删除包）`npm uninstall jquery `

```
$ npm uninstall jquery
	removed 1 package in 0.885s
```

更新包 `npm update jquery`

```
$ npm list
    +-- bootstrap@4.6.0
    +-- jquery@3.0.0
$ npm update jquery
	+ jquery@3.6.0
	updated 1 package in 0.65s
$ npm list
    +-- bootstrap@4.6.0
    +-- jquery@3.6.0
```

#### 运行时依赖&开发时依赖

`npm install --save jquery`    简写方式：npm i  jquery  -S

`npm install --save-dev less`   简写方式：npm i jquery -D

`--save` 在package.json文件的dependencies节点写入依赖，**默认会有这个参数**。

`--save-dev` 在package.json文件的devDependencies节点写入依赖

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖，里面的模块是开发时用的，发布时用不到它，比如项目中的使用的gulp，压缩cssjs的模块，这些模块在我们的项目部署后是不需要的。

```json
{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "bootstrap": {
      "version": "4.6.0",
      "resolved": "https://registry.npm.taobao.org/bootstrap/download/bootstrap-4.6.0.tgz",
      "integrity": "sha1-l7nymsmPmN+kO/dGgmLYQ5JVL9c="
    },
    "jquery": {
      "version": "3.6.0",
      "resolved": "https://registry.npm.taobao.org/jquery/download/jquery-3.6.0.tgz",
      "integrity": "sha1-xyoJ8Vwb3OFC9J2/EXC9+K2sJHA="
    }
  }
}
```



### package.json

#### 初始化

#默认配置

`npm init --yes` 

or

#自定义配置

`npm init` 

运行完此命令后会生成一个package.json文件，这个就是配置文件，文件内容如下

```json
{
  "name": "eduwork",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

安装完jquery之后

`npm install jquery --save`

```json
{
  "name": "eduwork",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```

有个这个配置文件之后只需要执行`npm install` ，就可以将项目中需要的包全部下载下来，这些包的信息全部存在这个配置文件中，比如版本，开发依赖还是运行依赖都记录在package.json文件中

#### 版本符号说明

"jquery": "^3.6.0"

"jquery": "~3.6.0"

^3.6.0表示安装包的时候会将后边两位装成最新的，相当于^3.x.x，如果最新的是3.7.9，那么装的 就是3.6.9

~3.6.0表示安装包的时候会将后边两位装成最新的，相当于~3.6.x，如果最新的是3.6.5，那么装的就是3.6.5

### Yarn

官网地址：https://yarnpkg.com/

> Yarn是由Facebook、Google、Exponent和Tilde联合推出的一个新的js包管理工具，正如官方文档中所写的，Yarn是为了弥补npm的一个缺陷而出现的，因为NPM5以下会出现下面的问题

* npm install的时候巨慢，特别是新的项目拉下来要等半天，删除node_modules，重新install的时候依旧如此。
* 同一个项目，多人开发时，由于安装的版本不一致出现bug。

#### yarn优点

》速度快

》安装版本统一

》更简洁的输出

》多注册来源处理

》更好的语义化

命令对比

| npm                          | yarn                 |
| ---------------------------- | -------------------- |
| npm install                  | yarn                 |
| npm install react --save     | yarn add react       |
| npm uninstall react --save   | yarn remove react    |
| npm install react --save-dev | yarn add react --dev |
| npm update --save            | yarn upgrade         |



## webpack实战教程

### 初体验

》创建目录

》进入目录并初始化 ：npm init --yes

》安装webpack及webpack-cli：npm i webpack webpack-cli -D



创建src目录并写相关代码

》打包：

​	webpack --mode development

​	webpack --mode production



### webpack的5个核心概念

这5个核心概念也是配置文件webpack.config.js中的5个配置项，执行打包命令的时候，会根据这个文件中的配置进行打包

entry：表示webpack打包的入口文件，告诉webpack以哪个文件为入口开始打包，不写的话webpack默认会从 './src/index.js' 开始打包

output：表示webpack打包后的资源bundles输出到哪里以及如何命名，不写的话默认会生成在项目根目录下的dist目录总，文件名为main.js

loader：_

plugins：_

mode：有两种，包括开发模式（development）和生产模式（production）

一个简单的webpack.config.js如下：

```js
const {resolve} = require('path')		//node中用来获取项目路径的一个模块
module.exports = {
	entry:'./src/index.js',
	mode:'development',
	output:{
		filename:'build.js',
		path:resolve(__dirname,'build')
	},
    /* loader配置 */
	modules:{
		rules:[]
	},
	plugins:[
		
	]
}
```

### 多入口和多出口情况配置

如果只有一个入口，使用字符串就可以，指定一个chunk，输出一个bundle

如果是多入口，有多种写法，可以写成一个数组形式，也可以写成一个对象形式

数组形式：

```js
module.exports = {
	entry:['./src/index.js','./src/main.js']	//所有的入口文件形成一个chunk，名称是默认的，输出也只有一个bundle
}
```

对象形式：

```js
//有几个入口文件就会生成几个chunk，并输出一个bundle，chunk的名称是key，注意output配置项中要用[name].js作为文件名
module.exports = {
	entry:{
		one:'./src/index.js',
		two:'./src/main.js'
	},
	output:{
		filename:'[name].js',
	}
}
//执行上面的配置文件就会生成one.js和two.js两个文件
```

混合形式：

```js
//有几个入口文件就会生成几个chunk，并输出一个bundle，chunk的名称是key，注意output配置项中要用[name].js作为文件名
module.exports = {
	entry:{
		home:'./src/home.js',
		cart:'./src/cart.js',
        vender:['./src/common/comm.js','jquery.js']
	},
	output:{
		filename:'[name].js',
	}
}
//执行上面的配置文件就会生成三个文件：home.js、cart.js、vender.js
```

### 打包html

使用插件（plugins）对html文件进行处理（html-webpack-plugin）

下载：npm i html-webpack-plugin -D

引入：const HtmlWebpackPlugin = require('html-webpack-plugin')

使用：

```js
plugins:[
	//默认会创建一个空的html文件，自动引入打包输出的所有资源（js/css）
	//new HtmlWebpackPlugin()
	
	//通过参数可以输出有结构的html资源
	new HtmlWebpackPlugin({
        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
		template:'./src/index.html',
        //默认输出的文件名是index.html，通过filename设置输出文件的名称
        //filename:'demo.html'
	})
]
```

完整配置如下：

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:'./src/index.js',
	mode:'development',
	plugins:[
		//通过参数可以输出有结构的html资源
		new HtmlWebpackPlugin({
	        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template:'./src/index.html',
	        //默认输出的文件名是index.html，通过filename设置输出文件的名称
	        filename:'kerwin.html'
		})
	]
}
```

此外，还可以压缩html和删除注释

```js
plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			
			//压缩html代码
			minify:{
				//移除空格
				collapseWhitespace:true,
				//移除注释
				removeComments:true:true
			}
		})
	]
```

案例应用：

src目录下有home.html、cart.html、home.js、cart.js、common.js、jquery.js

​	在home.html中需要引入home.js、common.js和jquery.js

​	在cart.html中需要引入cart.js、common.js和jquery.js

按照要求，需要将common.js和jquery.js打包成一个js文件，而home.js和cart.js需要分别打包

配置如下:

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:{
		home:'./src/home.js',
		cart:'./src/cart.js',
		vender:['./src/common/comm.js','./src/common/jquery.js']
	},
	mode:'development',
	output:{
		filename:'[name].js'
	},
	plugins:[	
		new HtmlWebpackPlugin({
			template:'./src/home.html',
	        filename:'home.html',
			chunks:['home','vender']		//如果不指定要引入哪些资源文件，将默认引入所有，引入的时候不需要加.js
		}),
		new HtmlWebpackPlugin({
			template:'./src/cart.html',
		    filename:'cart.html',
			chunks:['cart','vender']
		})
	]
}
```

### 打包css资源

需要使用npm下载安装两个loader帮我们完成打包

```
# npm i css-loader style-loader -D
```

1、css-loader的作用是处理css中的@import和url这样的外部资源

2、style-loader的作用是把样式插入到DOM中，原理是在head中插入一个style标签并把样式写入到这个标签的innnerHTML里

```js
module.exports = {
	entry:'./src/index.js',
	mode:'development',
	
	module:{
		rules:[
			// {loader:'css-loader'},					//使用单个loader
			{
				test:/\.css$/,							//表示打包何种资源文件，这里是打包以.css结尾的文件
				use:['style-loader','css-loader']		//这两个顺序不能写反了，从后往前加载的，所以是先加载css通过css-loader，再把css插入到head标签中通过style-loader
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
	        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template:'./src/index.html',
	        //默认输出的文件名是index.html，通过filename设置输出文件的名称
	        filename:'demo.html'
		})
	]
}
```

生成的结果包含一个js和一个html，为什么没有css呢？因为css写在js文件中了，当打开html的时候，html会加载js文件，此时，js将动态的在head中添加样式

### 打包less或sass资源

》因为css只是单纯的属性描述，它并不具有变量、条件语句等，css的特性导致了它难阻止和维护

》Sass和Less都属于CSS预处理器，定义了一种新的语言，其基本思想是用一种专门的编程语言，为CSS增加一些编程的特性，将CSS作为目标生成文件，然后开发者使用这种语言进行CSS编码工作

》Less需要使用npm下载less包和less-loader

》Sass需要使用npm下载node-sass包和sass-loader

```
# npm i less less-loader -D
# npm i node-sass sass-loader -D
```

**配置**

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:'./src/index.js',
	mode:'development',
	
	module:{
		rules:[
			{
				test:/\.css$/,							//表示打包何种资源文件，这里是打包以.css结尾的文件
				use:['style-loader','css-loader']		//这两个顺序不能写反了，从后往前加载的，所以是先加载css在把css插入到head标签中
			},
			{
				test:/\.less$/,							//表示打包何种资源文件，这里是打包以.less结尾的文件
				use:['style-loader','css-loader','less-loader'] //先将less文件变异成css，再根据打包css的规则进行处理，所以从后往前
			},
			{
				test:/\.scss$/,							//表示打包何种资源文件，这里是打包以.sass结尾的文件
				use:['style-loader','css-loader','sass-loader'] //先将sass文件变异成css，再根据打包css的规则进行处理，所以从后往前
			}
		]
	},
	plugins:[
		
		new HtmlWebpackPlugin({
	        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template:'./src/index.html',
	        //默认输出的文件名是index.html，通过filename设置输出文件的名称
	        filename:'demo.html'
		})
	]
}
```



less文件是以.less结尾的，用@声明变量；sass文件是以.scss结尾的，用$声明变量

less文件

```less
@height:200px;
@width:200px;
@bgColor:lightblue;

#box2{
	width: @width;
	height: @height;
	background-color: @bgColor;
}
```

sass文件

```scss
$height:100px;
$width:100px;
$bgColor:yellow;

#box3{
	width: $width*3;
	height: $height*3;
	background-color: $bgColor;
}
```

### 提取CSS为单独文件

CSS内容是打包在js文件中的，可以使用 `mini-css-extract-plugin`  插件提取成单独的CSS文件

1、在webpack.config.js中引入插件

const MiniCssExtractPlugin = require('mini-scc-extract-plugin')

2、在plugins模块中使用插件

plugins:[new MiniCssExtractPlugin()]

或通过参数filename重新命名提取后的css文件名

new MiniCssExtractPlugin({filename:'./css/demo.css'})

3、在CSS的rules中，使用MiniCssExtractPlugin.loader取代style-loader，提取js中css内容为单文件

{test:/\\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']}

webpack.config.js文件如下：

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')		//引入插件

module.exports = {
	entry:'./src/index.js',
	mode:'development',
	
	module:{
		rules:[
			// {loader:'css-loader'},
			{
				test:/\.css$/,	
                //在CSS的rules中，使用MIniCssExtractPlugin.loader取代style-loader，提取js中css内容为单文件
				use:[MiniCssExtractPlugin.loader,'css-loader']	
			},
			{
				test:/\.less$/,							
				use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'] 
			},
			{
				test:/\.scss$/,		
				use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader'] 
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
	        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template:'./src/index.html',
	        filename:'demo.html'
		}),
		new MiniCssExtractPlugin({
        	filename:'./css/demo.css'	//在plugins模块中使用插件
        })		
	]
}
```

### 处理CSS的兼容性

需要使用postcss处理，下载两个包`postcss-loader` 和 `postcss-preset-env` ，postcss-loader是依赖postcss-preset-env的

1、安装

```
# npm i postcss-loader postcss-preset-env -D
```

2、在webpack.config.js中做配置

```js
rules:[
    {
        test:/\.css$/,	
        use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']		//注意顺序，	先适配浏览器，再打包，最后生成单文件
	}
]
```

3、根目录下新建一个postcss.config.js配置文件，这个是postcss-loader的默认配置文件，目的是让postcss-loader加载postcss-preset-env这个插件

```js
module.exports = {
	plugins:[
		require('postcss-preset-env')()
	]
}
```

4、postcss-preset-env这个插件会去 **package.json** 文件中获取浏览器列表

```json
"browserslist":[
	  ">0.2%",
	  "last 2 versions",
	  "not dead"
  ]
```

5、执行打包命令后生成的css文件中就会自动加上适配浏览器的代码 `-webkit-backface-visibility: hidden;`

```css
#box{
	width: 100px;
	height: 100px;
	background: pink;
	border: 1px solid green;
	-webkit-backface-visibility: hidden;
	        backface-visibility: hidden;
}
```

less和sass同理，只需要在编译之前进行浏览器适配就行，webpack.config.js配置如下：

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry:'./src/index.js',
	mode:'development',
	module:{
		rules:[
			{
				test:/\.css$/,			
				use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']	   //注意顺序：提取单文件《打包《适配
			},
			{
				test:/\.less$/,	
				use:[MiniCssExtractPlugin.loader,'css-loader','less-loader','postcss-loader'] //顺序：提取单文件《打包《编译《适配
			},
			{
				test:/\.scss$/,	
				use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader'] //顺序：提取单文件《打包《编译《适配
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
	        //默认输出的文件名是index.html，通过filename设置输出文件的名称
	        // filename:'demo.html'
		}),
		new MiniCssExtractPlugin({
			filename:'./css/style.css'
		})
	]
}
```

### 压缩CSS内容

使用 `optimize-css-assets-webpack-plugin` 插件压缩CSS内容

1、安装

```
# npm i optimize-css-assets-webpack-plugin -D
```

2、引入

```
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
```

3、使用

```
new OptimizeCssAssetsWebpackPlugin()
```

完整webpack.config.js配置如下

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')	//引入压缩css的插件

module.exports = {
	entry:'./src/index.js',
	mode:'development',
	module:{
		rules:[
			{
				test:/\.css$/,			
				use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']	
			},
			{
				test:/\.less$/,	
				use:[MiniCssExtractPlugin.loader,'css-loader','less-loader','postcss-loader'] 
			},
			{
				test:/\.scss$/,	
				use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader']
			}
		]
	},
	plugins:[
		
        //打包html文件的插件
		new HtmlWebpackPlugin({
	        //复制'./src/index.html'文件，并自动引入打包输出的所有资源（js/css）
			template:'./src/index.html'
	        //默认输出的文件名是index.html，通过filename设置输出文件的名称
	        // filename:'demo.html'
		}),
        //将css生成单独文件的插件
		new MiniCssExtractPlugin({
			filename:'./css/style.css'
		}),
		
        //压缩CSS的插件
		new OptimizeCssAssetsWebpackPlugin()
	]
}
```

### 打包图片资源

略



## ES6语法与应用

### 箭头函数

* 如果没有参数，或有多个参数就需要使用 () 来定义参数列表

* 如果有一个参数，可以不用 ()

* 如果函数体中只有一条语句，可以不用{}，不用使用return，会自动加上



传统的函数定义方法

```js
function add(a, b){
	return a+b
}
//or
let fn = function(a){
    return a*a
}
```

用箭头函数定义上面两个函数

```js
let add = (a, b)=>a+b

let power = a=>a*a
```



使用箭头函数有什么好处呢？

作为回调函数特别方便，比如我们要实现一个数组排序

```js
let arr = [1,5,4,9,8,13]
//传统方式
let newArr1 = arr.sort(function(a, b){
    return a-b
})
console.log(newArr1)

//箭头函数方式，将箭头函数作为回调函数
let newArr2 = arr.sort((a,b)=>a-b)
console.log(newArr2)
```

如果我们用箭头函数返回一个对象，即函数体中只有一条返回对象的语句，那么需要给这条语句加个（）

```js
const fun = id=>({id:id,name:'kerwin'})
//等价于
const fun = id=>{ return {id:id,name:'kerwin'}}

console.log(fun().name)
```

### this的指向问题

\>> 普通函数的this：指向它的调用者，如果没有调用者则默认指向window

\>> 箭头函数的this：指向箭头函数定义时所处的对象，而不是箭头函数使用时所在的对象，默认使用父级的this

\>> 综上：箭头函数没有自己的this，他的this是继承而来，默认指向在定义它时所处的对象（宿主对象）

```js
<script>	
    let obj1 = {
        fun:function(){
            console.log(this)
        }
    }		
	obj1.fun()		//打印结果为Object对象，为他的调用者

	let obj2 = {
        fun:()=>{
            console.log(this)
        }
	}		
	obj2.fun()		//打印结果为Window对象	
</script>
```

看例子

```js
<script>
    let box = document.querySelector('#box')
    // box.addEventListener('click', function(){
    // 	let obj = this
    // 	setTimeout(function(){
    // 		console.log(this)			//打印的是window
    // 		obj.className = 'bgColor'
    // 	},3000)
    // })
    box.addEventListener('click', function(){
        setTimeout(()=>{
            console.log(this)
            this.className = 'bgColor'
        },3000)
    })
</script>
```

### 数组中新增加的常用高级函数

filter => 过滤器

map => 映射

reduce => 汇总

通过一个需求来使用，有一个商品列表
		1.将大于20元的商品打折，取出大于20元的商品
		2.将10元以上的商品打5折
		3.算出打完折的商品总价是多少

```js
//不使用高级函数的方法
let goods = [18,30,26,15,90]
		
let goods1 = []
let goods2 = []
for(n of goods){
    if(n>20){
        goods1.push(n)
    }
}
console.log(goods1)

for(n of goods1){
    goods2.push(n*0.5)
}

console.log(goods2)

let sum = 0
for(n of goods2){
    sum+=n
}
console.log(sum)
```

使用高级函数

```js
<script>	
    /*
        有一个商品列表
        1.将大于20元的商品打折，取出大于20元的商品
        2.将10元以上的商品打5折
        3.算出打完折的商品总价是多少
	*/
    let goods = [18,30,26,15,90]
	console.log(goods.filter(n=>n>20).map(n=>n*0.5).reduce((s,n)=>s+n,0))	//链式调用

</script>
```

### Map与Set

Set

```js
let obj = new Set()
obj.add(1)
obj.add(2)
obj.add(['h','e'])
obj.has(2)
obj.delete(1)
obj.size
obj.clear()
```

Map省略

### reduce方法

reduce是累加器，对一个数组的值进行累加可以用此方法，如下所示，total代表总和，item代表数组中的每一项，3代表数初始值，结果为20

```js
let arr = [1,2,3,4,7]	//结果为20
return arr.reduce((toal,item)=>{return total+item},3)
```



### 字符串新增方法

startsWith()

endsWith()

```js
<script>
    let url = "https://www.bilibili.com"

    if(url.startsWith('https')){
        console.log("以https开头的")
    }else{
        console.log("不是以https开头的")
    }
    if(url.endsWith('.com')){
        console.log("以.com结尾的")
    }else{
        console.log("不是以以.com结尾的")
    }

    console.log(url)
</script>
```

### 模板字符串

支持换行和变量

```js
<script>	
    let name = '旧梦散人'
    let str = `你好,${name}`
    console.log(str)
</script>
```

### 解构赋值

结构数组或者对象

左右两边结构必须一样

右边必须有值

声明和赋值不能分开

```js
<script>
    let arr = [1,2,3]
    let [a,b,c] = arr
    console.log(a)
    console.log(b)
    console.log(c)

    let obj = {name:'kerwin',age:18,sex:'男'}
    let {name,age,sex} = obj
    console.log(name)
    console.log(age)
    console.log(sex)
</script>
```

### 三点运算符

展开

```js
<script>
    let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    let arr3 = [...arr1,...arr2]
    console.log(arr3)
</script>
```

可变参数

```js
function show(...args){
    console.log(args)
}

show(1,2,3)			//结果为[1,2,3]
show(1,2,3,4,5)		//结果为[1,2,3,4,5]
```

### Class（类）概念

```js
<script>
	
    //定义Person类
    class Person{
        
        //该类的构造方法
        constructor(name,age,sex) {
            this.name = name
            this.age = age
            this.sex = sex
        }

        say(){
            console.log("我的名字是：",this.name)
            return this.name
        }
    }
    let person = new Person('kerwin',18,'男')
    person.say()
</script>
```

### Module模块化编程

一个模块就是一个独立的文件，该文件内部所有的变量，外部无法获取

通过export关键字进行导出，可以导出变量，函数，数组，对象等等

通过import ... from 进行导入。import命令接受一对大括号，里面指定要从其他模块导入的变量名，大括号里面的变量名，必须与被导入模块对外接口的名称相同

```js
//one.js
export let name = "kerwin"
export let age = 18
export let sex = "男"

export function say(arg){
    console.log("你好，",arg)
}
```

```js
//two.js
import {name,age,sex} from './one.js'
import {say as mysay} from './one.js'

mysay("Kerwin")
```

### 

















