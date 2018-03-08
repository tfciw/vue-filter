<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-size: 14px;
  background: #F6F6F6;
}
@font-face {
    font-family: 'iconfont';  /* project id 183038 */
    src: url('http://at.alicdn.com/t/font_183038_4x94gyfg6jdwvcxr.eot');
    src: url('http://at.alicdn.com/t/font_183038_4x94gyfg6jdwvcxr.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_183038_4x94gyfg6jdwvcxr.woff') format('woff'),
    url('http://at.alicdn.com/t/font_183038_4x94gyfg6jdwvcxr.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_183038_4x94gyfg6jdwvcxr.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
