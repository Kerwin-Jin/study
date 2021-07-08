// 自定义插件

const kerwin = {};

kerwin.install = function(Vue,options){
	
	
	// 添加指令
	Vue.directive('up-text',function(el,binding){
		el.innerHTML = el.innerHTML.toUpperCase();
	})
	
	Vue.directive('low-text',function(el,binding){
		el.innerHTML = el.innerHTML.toLowerCase();
	})
	
	Vue.projectName = '管理系统';
	Vue.version = 'v1.0';
	Vue.showInfo = function(){
		console.log('我是一些信息');
	}
	
	Vue.prototype.$random = function(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	}
}