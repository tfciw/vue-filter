<template>
	<div id="notice-box" :class="noticeWay">
		<Noticecard v-for="data in data" :data="data"></Noticecard>
	</div>
</template>
<script>
	import Noticecard from '@/components/NoticeCard' 
	export default {
		name: 'NoticeBox',
		props: {
			noticeWay: {
				type: String
			},
			data: {
				type: Array
			}
		},
		components: {
			Noticecard
		}
	}
</script>
<style scoped>
	#notice-box {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		border-bottom: 1px solid #dadada;
	}
	#notice-box .card:nth-of-type(4n) {
		margin-right: 0;
	} 
</style>