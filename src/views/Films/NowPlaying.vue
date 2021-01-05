<template>
    <div>
        <div class="loading" v-show="isLoading">
             <van-loading size="24px" type="spinner">加载中...</van-loading>
        </div>
        <van-card v-for="item in list" :key="item.iflmId">
          <template #thumb>
              <img :src="item.poster" width="66" >
          </template>
          <template #title>
              <div class="title">
                  {{ item.name }}
                  <span>{{ item.filmType.name}}</span>
              </div>
          </template>
          <template #desc>
              <div class="desc">
                  <div>观众评分 <span>{{ item.grade }}</span></div>
                  <div>主演: {{ item.actors | parseActors}}</div>
                  <div>{{ item.nation }} | {{ item.runtime }} 分钟</div>
                  <div class="buy">购票</div>
              </div>
          </template>
          
        </van-card>
    </div>
</template>

<script>
import uri from '@/config/uri'
import Vue from 'vue';
import { Loading, Toast, Card } from 'vant';
Vue.use(Loading);
Vue.use(Toast)
Vue.use(Card)
export default {
    data() {
        return {
            isLoading: true,
            list: []
        }
    },
    filters: {
        parseActors(actors) {
            if(actors) {
                let str = ''
                actors.forEach(item => {
                    str += item.name + ' '
                    
                }) 
                return str.substr(0, 15) + '...'
            }else {
               return '暂无主演'
            }
        }
    },
   created() {
       this.$http.get(uri.getNowPlaying).then(ret => {
          if(ret.status == 0) {
              this.list = ret.data.films
          } else {
               Toast.fail("网络繁忙")
          }
          this.isLoading = false
       })
   }
}
</script>

<style lang="scss" scoped>
.loading {
    text-align: center;
    padding-top: 5px;
    width: 100%;
    height: 40px;
    background-color:#f5f5f5;
    line-height: 40px;
}
img{
    border-radius: 0;
}
.van-card__content{
    margin-left: -17px;
}
.title{
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
    padding-top: 7px;
}
.title span{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.desc {
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
.desc div{
    margin-bottom: 4px;
}
.desc div span{
    color: #ffb232;
    font-size: 14px;
}
.buy{
    float: right;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
    margin-top: -60px;
    border: 1px solid #ff5f16;
    border-radius: 4px;
}
</style>