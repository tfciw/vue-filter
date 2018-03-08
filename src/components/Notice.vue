<template>
  <div id="notice">
    <div class="screen">
      <Methodbar :labelData="mothodsData" labelName="采购方式" @changeOptions="changeOptions" :isActive="options['method']"></Methodbar>
      <Calbar :labelData="directoryName" labelName="品目" @changeOptions="changeOptions" :isActive="options['cal']"></Calbar>
      <Calarea :isActive="options['area']"></Calarea>
    </div>
    <Searchbar @changeShowWayBlock="changeShowWayBlock" @changeShowWayList="changeShowWayList" :showWay="noticeWay" @getSearch="getSearch" @getDataList="getDataList"></Searchbar>
    <Noticebox :noticeWay="noticeWay" :data="data"></Noticebox>
    <Page></Page>
  </div>
</template>

<script>
import Calbar from '@/components/CalBar'
import Methodbar from '@/components/MethodBar'
import Calarea from '@/components/CalArea'
import Searchbar from '@/components/SearchBar'
import Noticebox from '@/components/NoticeBox'
import Page from '@/components/Page'
import notices from '@/data/notices.json'
export default {
  name: 'Notice',
  data () {
    return {
      mothodsData: [],
      directoryName: [],
      noticeWay: 'notice-box',
      dataList: notices.notices,
      data: [],
      buyer: '',
      options: {
        method: '不限',
        cal: '不限',
        area: '不限'
      }//方式，品目，
    }
  },
    mounted: function() {
      for(var i=0,len=notices.notices.length;i<len;i++) {
        if(this.mothodsData.indexOf(notices.notices[i].projectPurchaseWay) == -1){
          this.mothodsData.push(notices.notices[i].projectPurchaseWay);
        }
        if(this.directoryName.indexOf(notices.notices[i].projectDirectoryName) == -1){
          this.directoryName.push(notices.notices[i].projectDirectoryName);
        }
      }
      this.getDataList()
      // districts.foreach(function(){})
    },
  methods: {
    changeShowWayBlock: function() {
      this.noticeWay = 'notice-box'
    },
    changeShowWayList: function() {
      this.noticeWay = 'notice-list'
    },
    getDataList: function() {
      var _this = this;
      var arr = this.dataList;
      var nowArr = [];
      if(this.options.method === '不限') {
        nowArr = arr;
      }else {
        for(var a=0,alen=arr.length;a<alen;a++) {
          if(arr[a].projectPurchaseWay == this.options.method) {
            nowArr.push(arr[a]);
          }
        }
      }
      if(this.options.cal !== '不限') {
        var calArr = nowArr.filter(function(item) {
          return item.projectDirectoryName === _this.options.cal
        })
        nowArr = calArr;
        // console.log(nowArr);
      }
      this.data = nowArr;
    },
    changeOptions: function(data) {
      // console.log(this.options[data[0]])
      this.options[data[0]] = data[1];
      this.getDataList();
    },
    getSearch: function(data) {
      var arr = this.data;
      this.data = []
      for(var i=0;i<arr.length;i++) {
        if(arr[i].buyerName.indexOf(data)!= -1) {
          this.data.push(arr[i])
        }else {
          console.log('找不到您所查找的用户')
        }
      }
    }
  },
  components: {
    Calbar,
    Methodbar,
    Calarea,
    Searchbar,
    Noticebox,
    Page
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#notice {
  width: 1200px;
  margin: 20px auto 0;
}
.screen {
    overflow: hidden;
    background: #fff;
    border: 1px solid #bcbcbc;
}
</style>