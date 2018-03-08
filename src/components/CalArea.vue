<template>
	<div id="calbar">
		<div class="key">地区</div>
		<div>
			<ul class="label-box">
				<li><a href="javascript:;" :class="{'active':nowArea === '不限'}" class="unlimited" @click="checkIsSpecial(false,'不限')">不限</a></li>
				<li class="withTrangle" v-for="label in AreaData"><a href="javascript:;" @click="checkIsSpecial(true,label)" :class="{'special-active':nowArea === label}">{{label}}<span class="iconfont">&#xe67f;</span></a></li>
				<div class="detail-area" v-if="isSpecial">
					<ul>
						<li v-for="i in detailAddress"><a href="javascript:;">{{i}}</a></li>
					</ul>
				</div>
			</ul>
		</div>
	</div>
</template>
<script>
	import districts from '@/data/districts.json'
	export default {
		name: 'CalArea',
		data() {
			return {
				isSpecial: false,
				AreaData: [],
				nowArea: '不限',
				detailAddress: []
			}
		},
		props: {
			isActive: {
				type: String
			}
		},
		mounted: function() {
			var area = []; //大型地区如渝西地区
			for(var i=0,len=districts.length;i<len;i++) {
				if(area.indexOf(districts[i].flag) == -1){
					area.push(districts[i].flag);
				}
			}
			this.AreaData = area;
			// districts.foreach(function(){})
		},
		props: {
			labelData: {
				type: Array
			},
			labelName: {
				type: String
			}
		},
		methods: {
			checkIsSpecial: function() {
				this.isSpecial = arguments[0];
				this.detailAddress = [];
				this.nowArea = arguments[1];
				for(var i=0,len=districts.length;i<len;i++) {
					if(districts[i].flag == arguments[1]) {
						this.detailAddress.push(districts[i].name)
					}
			}
			}
		}
	}
</script>
<style scoped>
	#calbar {
		display: flex;
	}
	.key {
		width: 150px;
		color: #999;
		line-height: 45px;
		padding-left: 13px;
		font-size: 14px;
		background: #f6f6f6;
		box-sizing: border-box;
	}
	.label-box {
		width: 1000px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.label-box li{
		float: left;
		min-width: 100px;
		text-align: center;
		padding-left: 40px;
		margin-top: 13px;
		position: relative;
		z-index: 2;
	}
	.label-box li .iconfont {
		margin: 0 3px;
		font-size: 12px;
	}
	.label-box li a{
		display: inline-block;
		color: #4b4b4b;
    	padding: 2px 10px;
    	text-decoration: none;
    	border-radius: 7px;
	}
	.label-box li a:hover {
		background: #efefef;
	}
	.label-box li a.active {
		color: #fd4f3e;
	    border: 1px solid #fd4f3e;
	    background: #ffedeb;
	}
	.label-box li a.special-active {
		border: 1px solid #b4b4b4;
    	border-bottom: 1px solid #fff;
    	border-radius: 0;
	}
	.detail-area{
		width: 860px;
		margin-left: 140px;
		height: 77px;
		background: #fcfcfc;
		border: 1px solid #b4b4b4;
		box-sizing: border-box;
		margin-bottom: 12px;
		overflow: hidden;
		position: relative;
		top: -1px;
		z-index: 1;
	}
	.detail-area li {
		min-width: 100px;
		height: 20px;
	}
</style>