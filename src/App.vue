<template>
  <div id="app" class="app-container">
    <!-- header -->
    <mt-header fixed title="Vue 项目"></mt-header>
    <!-- container -->
	<!-- <transition name="fade">
		<router-view></router-view>
	</transition> -->
    <transition>
		<router-view></router-view>
	</transition>
    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
</script>
<style scoped>
.app-container{padding: 40px 0;overflow-x: hidden}
/* style for fade */
.fade-enter,
.fade-leave-to{opacity: 0;transform: translateX(100%)}
.fade-enter-active{transition: all .5s;}
/* style for default */
.v-enter,
.v-leave-to{opacity: 0;transform: translateX(100%)}
.v-enter-active{transition: all .5s;}
.mint-header.is-fixed{z-index: 99;}
</style>