<template>
    <div>
        <!-- 此处可以写电影模块的顶部tab导航 -->
        <Header />
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/Navigation/Header'
export default {
    components: {
        Header
    }
}
</script>