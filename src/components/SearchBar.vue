<template>
	<div id="search-bar">
		<div class="num-l">已发布公告<br><span class="c-red">(399)</span></div>
		<div class="form-r">
			<input type="text" class="user" placeholder="采购人" v-model="buyer">
			<input type="text" class="low-num money" placeholder="最低金额"> - 
			<input type="text" class="high-mun money" placeholder="最高金额">
			<ul class="show-way">
				<li>展示方式</li>
				<li><a href="javascript:;" class="iconfont case" :class="{'active':showWay === 'notice-box'}" @click="changeShowWayBlock()">&#xe600;</a></li>
				<li><a href="javascript:;" class="iconfont case" :class="{'active':showWay === 'notice-list'}" @click="changeShowWayList()">&#xe658;</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'SearchBar',
		data() {
			return {
				buyer: ''
			}
		},
		props: {
			showWay: {
				type: String,
				default: 'notice-box'
			}
		},
		methods: {
			changeShowWayBlock: function() {
				this.$emit('changeShowWayBlock');
			},
			changeShowWayList: function() {
				this.$emit('changeShowWayList');
			}
		},
		watch: {
			buyer: function() {
				this.$emit('getSearch',this.buyer);
				if(this.buyer === '') {
					this.$emit('getDataList');
				}
			}
		}
	}
</script>
<style scoped>
	#search-bar {
		overflow: hidden;
	    background: #fff;
	    border: 1px solid #bcbcbc;
	    margin: 20px 0;
	    display: flex;
	}
	.num-l {
		box-sizing: border-box;
		width: 150px;
		height: 54px;
		line-height: 20px;
		text-align: center;
		padding-top: 8px;
		border-right: 1px solid #cecece;
	}
	.c-red {
		color: #fd4f3e;
	}
	.form-r {
		flex: 1;
		padding-top: 10px;
	}
	.form-r input {
		height: 34px;
		outline: none;
		background: #fff;
	    font-size: 14px;
	    border: 1px solid #ccc;
    	border-radius: 4px;
    	display: inline-block;
    	box-sizing: border-box;
    	margin: 0 10px;
    	color: #555;
    	transition: all .3s linear;
	}
	.form-r input:focus {
		border:  1px solid #19aa6b;
		transition: all .3s linear;
	}
	.form-r .user {
		padding: 0 12px;
		width: 440px;
	}
	.money {
		width: 150px;
		padding: 0 26px;
		background: url('../assets/$.png') no-repeat left!important;
	}
	.show-way {
		float: right;
		width: 200px;
		border-left: 1px solid #ccc;
		box-sizing: border-box;
	}
	.show-way li {
		float: left;
		height: 34px;
		line-height: 34px;
		padding-left: 20px;
	}
	.show-way li .case {
		color: #666;
	}
	.show-way li a:hover,.show-way li a.active {
		color: #fd4f3e;
	}
</style>