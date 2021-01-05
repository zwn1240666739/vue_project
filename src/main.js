import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 axios
import axios from '@/api/http'
// 需要将对应的内容挂载到 vue原型上
// 后续每次使用的时候不必每次 import
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')