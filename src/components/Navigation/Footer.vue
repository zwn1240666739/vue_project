<template>
    <div>
        <van-tabbar  v-model="active" active-color="orange" inactive-color="#000" @change="changeItem">
           <van-tabbar-item>
               <van-icon class-prefix="iconfont icon-dianying" slot="icon" size="1.2rem" /><span>电影</span>
           </van-tabbar-item>
           <van-tabbar-item>
               <van-icon class-prefix="iconfont icon-yingyuan" slot="icon" size="1.2rem" /><span>影院</span>
           </van-tabbar-item>
           <van-tabbar-item>
               <van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.2rem" /><span>我的</span>
           </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
// 导入需要使用的字体样式文件（语法形式区别开JavaScript、vue文件模块）
import '@/assets/font/iconfont.css'
// 导入 vant组件
import Vue from 'vue';
import { Tabbar, TabbarItem, Icon } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return{
            // 底部导航的默认索引
            active: 0,
            // 定义底部导航需要的三个地址
            urls: ['/films/nowPlaying', '/cinemas', '/center'],
        }
    },
    created() {
        // 纠正刷新之后索引归零的情况
        // 获取路由信息: this.$route
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0
    },
    methods: {
        changeItem(index) {
            // 点击菜单的页面处理程序
            // index 为底部导航菜单索引
            this.$router.push(this.urls[index])
        }
    }
}
</script>
