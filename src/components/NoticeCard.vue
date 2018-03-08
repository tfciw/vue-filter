<template>
	<div class="card">
		<div class="content-wrap">
			<p class="title">{{data.title}}</p>
			<div class="tags">
				<i class="c-red">{{data.districtName}}</i>
				<i class="c-red">{{data.projectPurchaseWay}}</i>
			</div>
			<div class="tags">
				<i class="c-green">{{data.projectDirectoryName}}</i>
			</div>
			<div class="budget">
				<span>
					<span class="label">预算金额:</span>
					<span class="num">￥{{money}}</span>
				</span>
				<span class="buyer">
					采购人:
					<span>{{data.buyerName}}</span>
				</span>
			</div>
			<div class="datetime">
				<span>发布时间:</span>
				<span class="time">{{new Date(data.issueTime).toLocaleString()}}</span>
			</div>
			<a class="track">项目跟踪</a>
		</div>
		<div class="state-wrap">
			<p>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RDZFQkNCRjQyOTExRTY4NUVFQzMxOUIxRjQ3N0FDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2RDZFQkNDRjQyOTExRTY4NUVFQzMxOUIxRjQ3N0FDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZENkVCQzlGNDI5MTFFNjg1RUVDMzE5QjFGNDc3QUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZENkVCQ0FGNDI5MTFFNjg1RUVDMzE5QjFGNDc3QUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ENMX1AAABUElEQVQ4y43TzSsFYRTH8bleEklXiQgr2dhdK1lYSOQvoJRsZCMpGwsrLhtLqckCG8VNYiMLii2xtVIUG+QleQnxPflNPabncqc+Nc+Zc87MnHkmCMMwyGIIdzhBjRPvxjbqbe0rbMQU7vElB+hHMVJ4wxWa3cLS8Of4VMI+lrGOUzW6xKLOH61JVJzEEd6RRrniZcjXeSsOnSeqQEvUYBOv6Iq9zrleJ1oXKfcDbdEMOtR1zDMPm8N8LFaCMw03YYFVXKMwxwZmUDdNBZrmiiepEs/Y8FyrU4ORQCeznqRx5zMmY9fyFE/b4gZLngYN2MvSvEoNRm2xpaEk/tiVcb1q0O4u+nIstn1xrE9cEAVsg9yi6Z9ie8o53bDH/RdqcYEHDGhIvslnVDwdxd2EauwqwZotYAIz2NFOfcKw29j3mJ1Y02Ct6EX/yaSm/yv/G0QZH2X2wskfAAAAAElFTkSuQmCC">
				距离投标开始：
			</p>
			<i class="tag">即将开始</i>
			<div class="countdown-wrap">
				<span class="b-black" v-for="d in oDay">{{d}}</span>天
				<span class="b-black" v-for="h in oHour">{{h}}</span>时
				<span class="b-black" v-for="m in oMin">{{m}}</span>分
				<span class="b-black" v-for="s in oSecond">{{s}}</span>秒
			</div>
		</div>
		<div class="participation">
			<span>{{data.hits}}</span>次围观
		</div>
	</div>
</template>
<script>
	export default {
		name: 'NoticeCard',
		data() {
			return {
				oDay: ['0','0'],
				oHour: ['0','0'],
				oMin: ['0','0'],
				oSecond: ['0','0'],
				money: '0.00'
			}
		},
		props: {
			data: {
				type: Object
			}
		},
		beforeMount: function() {
			var money = String(this.data.projectBudget).split('');
			money.splice(money.length-3,0,',')
			this.money = money.join('') + '.00'
			function toDouble(str) {
				if(str.length == 1) {
				  str = '0' + str
				  return str;
				}
				return str;
			}
			var beginTime = new Date(this.data.bidBeginTime);
			// console.log(beginTime.toLocaleString());
			var _this = this;
			var timer = setInterval(function() {
				var iNow = new Date();
				var t = Math.floor((beginTime - iNow) / 1000);
				var oDay = Math.floor(t/86400);
				var oHour = Math.floor(t%86400/3600);
				var oMin = Math.floor(t%86400%3600/60);
				var oSecond = Math.floor(t%60);
				_this.oDay = String(oDay).split('');
				_this.oHour = String(oHour).split('');
				_this.oMin = toDouble(String(oMin)).split('');
				_this.oSecond = toDouble(String(oSecond)).split('');
			},1000)
		}
	}
</script>
<style scoped>
	/*box布局*/
	.notice-box .card {
		width: 285px;
		height: 330px;
		float: left;
		margin: 10px 20px 10px 0;
		background: #F6F6F6;
		border-radius: 5px;
		overflow: hidden;
		box-sizing: border-box;
		border: 1px solid #dadada;
	    background: #f8f8f8;
	    box-shadow: 0px 0px 10px #dddddd;
	    position: relative;
	    top: 0;
	    transition: all .3s linear;
	    cursor: pointer;
	}
	.notice-box .card:hover {
		border-color: #fd4f3e;
		top: -10px;
		transition: all .3s linear;
	}
	.notice-box .card .content-wrap {
	    padding: 20px 20px 0 20px;
	    height: 190px;
	    box-sizing: border-box;
	    background: #fff;
	    text-align: left;
	}
	.notice-box .card .content-wrap .title{
		font-size: 15px;
	    color: #333333;
	    font-weight: 600;
	    width: 98%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -o-text-overflow: ellipsis;
	    white-space: nowrap;
	    word-break: keep-all;
	    margin-bottom: 10px;
	}
	.notice-box .card .content-wrap .tags {
		margin-bottom: 10px;
	}
	.notice-box .card .content-wrap .tags i{
		border: 1px solid #fff;
	    padding: 2px 10px;
	    font-size: 12px;
	    background: white;
	    
	    margin-right: 5px;
	    border-radius: 10px;
	    display: inline-block;
	}
	.notice-box .card .content-wrap .tags i.c-red {
		color: #fd4f3e;
		border-color: #fd4f3e;
	}
	.notice-box .card .content-wrap .tags i.c-green {
		color: #00c797;
		border-color: #00c797;
	}
	.notice-box .card .content-wrap .budget {
		margin: 20px 0 10px 0;
		height: 25px;
	}
	.notice-box .card .content-wrap .budget .buyer,.notice-box .card .track {
		display: none;
	}
	.notice-box .card .content-wrap .budget .label {
		color: #999999;
	}
	.notice-box .card .content-wrap .budget .num {
		color: #d63c00;
		font-size: 18px;
	    font-weight: 700;
	    margin-left: 10px;
	}
	.notice-box .card .content-wrap .datetime{
		color: #808996;
	}
	.notice-box .card .content-wrap .datetime .time {
		margin-left: 10px;
	}
	.notice-box .card .state-wrap {
		height: 100px;
	    position: relative;
	    overflow: hidden;
	}
	.notice-box .card .state-wrap p {
		padding: 10px;
	    font-weight: 100;
	    color: #666666;
	    margin-bottom: 5px;
	}
	.notice-box .card .state-wrap p img {
		margin-right: 5px;
	}
	.notice-box .card .state-wrap .tag {
		background: #19aa6b;
		position: absolute;
		right: 0;
		top: 0;
		color: #fff;
	    padding: 0 12px;
	    line-height: 26px;
	}
	.notice-box .card .state-wrap .countdown-wrap {
		height: 20px;
		text-align: center;
		line-height: 20px;
		margin-top: 25px;
	}
	.notice-box .card .state-wrap .countdown-wrap .b-black{
		padding: 3px 5px;
	    margin-right: 3px;
	    background-color: #272822;
	    color: #fff;
	    font-style: normal;
	    border-radius: 3px;
	}
	.notice-box .card .participation {
		height: 37px;
		line-height: 37px;
		text-align: center;
		font-size: 12px;
    	color: #999999;
	}

	/*list布局*/
	.notice-list .card {
		width: 100%;
		height: 130px;
		background: lightblue;
		box-sizing: border-box;
		display: flex;
		border: 1px solid #dadada;
		position: relative;
		background: #F6F6F6;
		margin-bottom: -1px;
	}
	.notice-list .card .content-wrap {
		width: 840px;
		height: 100%;
		padding: 20px 20px 0 20px;
		box-sizing: border-box;
		background: #fff;
		position: relative;
	}
	.track {
		position: absolute;
		right: 20px;
		top: 20px;
		color: #fff;
	    background-color: #337ab7;
	    font-size: 14px;
	    text-align: center;
   		line-height: 34px;
   		padding: 0 14px;
   		border-radius: 34px;
   		cursor: pointer;
	}
	.notice-list .card .content-wrap .title {
	    color: #333333;
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 45px;
	}
	.notice-list .card .content-wrap .tags {
		margin-bottom: 10px;
		float: left;
	}
	.notice-list .card .content-wrap .tags i{
		border: 1px solid #fff;
	    padding: 2px 10px;
	    font-size: 12px;
	    line-height: 16px;
	    background: white;
	    margin-right: 5px;
	    border-radius: 10px;
	    display: inline-block;
	}
	.notice-list .card .content-wrap .tags i.c-red {
		color: #fd4f3e;
		border-color: #fd4f3e;
	}
	.notice-list .card .content-wrap .tags i.c-green {
		color: #00c797;
		border-color: #00c797;
	}
	.notice-list .card .content-wrap .budget {
		position: absolute;
    	top: 40px;
    	margin: 10px -15px 10px 0;
    	min-height: 25px;
    	color: #999999;
    	font-size: 12px;
	}
	.notice-list .card .content-wrap .budget .num{
		color: #d63c00;
		font-size: 18px;
	    font-weight: 700;
	    margin-left: 10px;
	}
	.notice-list .card .content-wrap .budget .buyer {
		margin-left: 30px;
	}
	.notice-list .card .content-wrap .budget .buyer span {
		color: #333;
		font-size: 14px;
	}
	.notice-list .card .content-wrap .datetime {
		position: absolute;
	    right: -350px;
	    bottom: 10px;
	    z-index: 1;
	    color: #999999;
	}
	.notice-list .card .state-wrap {
		border-left: 1px dashed #bbbfc4;
		box-sizing: border-box;
	}
	.notice-list .card .state-wrap .tag {
		position: absolute;
		right: 0;
		top: 0;
		background: #19aa6b;
		color: #fff;
	    padding: 0 12px;
	    line-height: 26px;
	}
	.notice-list .card .state-wrap p{
		padding: 10px;
	    font-weight: 100;
	    color: #666666;
	}
	.notice-list .card .state-wrap .countdown-wrap {
		height: 20px;
		text-align: center;
		line-height: 20px;
		margin-top: 10px;
		margin-left: 10px;
	}
	.notice-list .card .state-wrap .countdown-wrap .b-black{
		padding: 3px 5px;
	    margin-right: 3px;
	    background-color: #272822;
	    color: #fff;
	    font-style: normal;
	    border-radius: 3px;
	}
	.notice-list .card .participation{
		position: absolute;
	    left: 71%;
	    bottom: 10px;
	    border: none;
	    padding: 0;
	    font-size: 12px;
    	color: #999999;
	}
</style>