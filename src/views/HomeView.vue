<template>
    <div class="home">
        <div class="head-tit">现在位置 >首页</div>
        <div class="main-lef fl">
            <!-- 轮播图 -->
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="d in swiperList"
                        :key="d.image"
                    >
                        <a :href="d.link">
                            <img :src="d.image" alt="">
                            <p class="swiper-p">{{d.tit}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-rig fr">
            <div class="list-one">
                <div class="one-head">
                    <img src="@/assets/分类.png" alt="">
                    <p>本站推荐</p>
                </div>
                <div class="list-item">
                    <ul class="list-ul">
                        <li  
                        v-for="(list,index) in items"
                        :key="list.index">
                        <p class="p1">{{index+1}}</p>
                        <p class="p2">{{list.titie}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/styles/home.css';
</style>
<script>
// 引入swiper
import Swiper from 'swiper';
import 'swiper/css';
export default {
    data() {
     return {
       swiperList: [
            {"image":require('../assets/10002.jpg'),"tit":"很高兴认识你"},
            {"image":require('../assets/10003.png'),"tit":"目前的你又什么和爱好"},
       ], // 轮播图
       items:[
        {"titie":"写在世界读书日:与书为伴与书同行"},
        {"titie":"卸载手机上的游戏之后我在想什么"},
        {"titie":"再谈博客————快乐、狂欢、独白"},
        {"titie":"朴素生活,高尚思考"},
        {"titie":"阅读、思考、写作"},
        {"titie":"很高兴认识你"},
       ],
       swiper: null // 存放swiper实例
     };
  },
   mounted() {
    this.swiper = new Swiper('.swiper');
   },
   beforeDestroy() {
    this.swiper.destroy();
  }
};
</script>
