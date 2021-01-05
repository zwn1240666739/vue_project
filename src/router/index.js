import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    // 导入需要的组件
    // import Films from "@/views/Films/Index";
    // import NowPlaying from "@/views/Films/NowPlaying";
    // import ComingSoon from "@/views/Films/ComingSoon";
    // import Detail from "@/views/Films/Detail";
    // import Cinemas from "@/views/Films/Index";
    // import Center from "@/views/Films/Index";

// 导入经过模块化的路由
import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'
const routes = [{
        path: '/',
        redirect: '/films/nowPlaying',
    },
    // 模块化
    ...filmRouter,
    cinemaRouter,
    centerRouter
    // {
    //     path: '/films',
    //     component: Films,
    //     children: [
    //         { path: 'nowPlaying', component: NowPlaying },
    //         { path: 'comingSoon', component: ComingSoon },
    //     ]
    // },
    // {
    //     path: '/film/:filmId',
    //     component: Detail,
    // },
    // 影院模块
    // {
    //     path: '/cinemas',
    //     component: Cinemas,
    // },
    // 我的模块
    // {
    //     path: '/center',
    //     component: Center,
    // }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router