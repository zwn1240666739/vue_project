// 封装 axios
import axios from "axios";
// 对于 axios 响应结果的处理封装 (响应拦截器)
axios.interceptors.response.use(ret => {
        // 可以进行响应拦截处理
        // if (ret.data) {
        //     return ret.data
        // } else {
        //     return ret
        // }
        // 短路运算符
        return ret.data || ret
    })
    // 对于 axios 请求的处理封装 (请求拦截器)
    // axios.interceptors.request.use(cfg => {

//     })
// 导出 axios
export default axios