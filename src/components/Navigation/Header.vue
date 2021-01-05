<template>
    <div>
        <van-tabs title-active-color="orange" line-width="50" color="orange" v-model="active" @click="onClick">
        <van-tab title="正在热映"></van-tab>
        <van-tab title="即将上映"></van-tab>
</van-tabs>
    </div>
</template>
<script>
// 导入 导航组件
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
// 导入
Vue.use(Tab);
Vue.use(Tabs);

export default {
    data() {
        return {
            active: 0 ,
            urls: ['/films/nowPlaying', '/films/comingSoon']
        }
    },
    // 纠正刷新索引归零情况
    created() {
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0

         
    },
    // 切换地址栏信息
    methods: {
        onClick(index) {
            this.$router.push(this.urls[index])
        },
    },
}
</script>
