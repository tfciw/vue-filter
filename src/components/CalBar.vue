<template>
	<div id="calbar">
		<div class="key">{{labelName}}</div>
		<div>
			<ul class="label-box">
				<li><a href="javascript:;" :class="{'active':isActive === '不限'}" class="unlimited" @click="changeOptions('cal','不限')">不限</a></li>
				<li  v-for="label in labelData"><a href="javascript:;" :class="{'active':isActive === label}" @click="changeOptions('cal',label)">{{label}}</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CalBar',
		data() {
			return {

			}
		},
		props: {
			labelData: {
				type: Array
			},
			labelName: {
				type: String
			},
			isActive: {
				type: String
			}
		},
		methods: {
			changeOptions: function() {
				this.$emit('changeOptions',arguments);
			}
		}
	}
</script>
<style scoped>
	#calbar {
		display: flex;
		border-bottom: 1px dashed #bbbfc4;
	}
	.key {
		width: 150px;
		min-height: 45px;
		color: #999;
		line-height: 45px;
		padding-left: 13px;
		font-size: 14px;
		background: #f6f6f6;
		box-sizing: border-box;
	}
	.label-box {
		box-sizing: border-box;
	}
	.label-box li{
		float: left;
		min-width: 100px;
		text-align: center;
		padding-left: 40px;
		margin-top: 13px;
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
</style>