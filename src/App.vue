<template>
  <div id="app">
    <Footer />
    <router-view/>
  </div>
</template>
<script>

import Footer from '@/components/Navigation/Footer'
export default {
 // 测试网络请求是否可用, 用完即删
 // vant 测试代码 (用完即删)
 // 注册组件
 components: {
   Footer
 }
}
</script>
<style lang="scss">

</style>
