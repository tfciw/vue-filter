组件：
筛选方式MethodBar
筛选品目CalBar
特殊地区筛选分类CalArea
筛选搜索条SearchBar
列表卡 NoticeBox
单个卡片 NoticeCard
分页组件 Page
判断展示方式 :class="{'active':showWay === 'notice-box'}"
关于筛选条件封装在 notice组件 options里

子组件-》父组件 @click="clickFn"
	clickFn = function() { this.$emit('clickCallBack',data) } data为传值对象。

初始会调用notice组件的方法getDataList(),
searchBar组件绑定buyer，watch监听buyer一旦发生改变出发父组件getSearch方法，一旦为空重新出发父组件getDataList方法
方法或是生命周期的第一层作用域this指向实例本身，在深一层this！=实例，需要在第一层定义var -this = this
筛选用了js数组本身的filter方法，和foreach，map不同，filter是返回的合乎条件的项的新数组
var calArr = nowArr.filter(function(item) {
	return item.projectDirectoryName === -this.options.cal
})
nowArr = calArr; 
