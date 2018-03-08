<template>
	<div id="page">
		<div class="info">共<span class="c-red">13136</span>条 [每页<span class="c-gray">12</span>条] </div>
		<div class="jump">
			共<span>3</span>页 去第<input type="text">页<button disabled="disabled">跳转</button>
		</div>
		<div class="page-bar">
			<ul>
				<li><a href="javascript:;">首页</a></li>
				<li><a href="javascript:;">上一页</a></li>
				<li><a href="javascript:;" class="active">1</a></li>
				<li><a href="javascript:;">2</a></li>
				<li><a href="javascript:;">3</a></li>
				<li><a href="javascript:;">下一页</a></li>
				<li><a href="javascript:;">末页</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Page',
		data() {
			return {
			}
		}
	}
</script>
<style scoped>
	#page {
		margin: 20px 0;
		overflow: hidden;
	}
	#page .info {
		float: left;
	    height: 34px;
	    line-height: 34px;
	}
	.c-red {
		color: #ac2925;
		margin: 0 5px;
	}
	.c-gray {
		color: #808080;
		margin: 0 5px;
	}
	#page .jump {
		float: right;
		height: 34px;
		line-height: 34px;
		margin-left: 20px;
	}
	#page .jump input{
		box-sizing: content-box !important;
	    width: 50px !important;
	    padding: 5px 0;
	    text-align: center;
	    height: 14px;
	    line-height: 14px;
	    margin: 0 5px;
	    vertical-align: middle;
	    margin: 0 5px;
	}
	#page .jump button {
		margin-left: 10px;
    	padding: 4px 9px;
    	cursor: not-allowed;
	    opacity: .65;
	    color: #333;
	    background: #fff;
	    border-radius: 4px;
	    border: 1px solid #ccc;
	}
	#page .page-bar {
		float: right;
	}
	#page .page-bar li {
		float: left;
		height: 34px;
		line-height: 34px;
	}
	#page .page-bar li a {
		padding: 6px 12px;
		text-decoration: none;
	    color: #337ab7;
	    background-color: #fff;
	    border: 1px solid #ddd;
	    margin-left: -1px;
	}
	#page .page-bar li a.active {
		color: #fff;
	    background-color: #337ab7;
	    border-color: #337ab7;
	}
</style>