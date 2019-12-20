<template>
    <div id="app">
        <!-- header -->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- container -->

        <!-- tabbar -->
        <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="images/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="images/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="images/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="images/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>

</script>
<style scoped>

</style>