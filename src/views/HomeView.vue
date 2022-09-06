<template>
    <div class="home">
        <div class="head-tit">现在位置 >首页</div>
        <div class="main-lef fl">
            <!-- 轮播图 -->
            <el-carousel :interval="2000" type="card" class="swiper" >
                <el-carousel-item 
                class="swiper-slide"
                v-for="d in swiperList"
                :key="d.image"
                >
                    <a :href="d.link">
                        <img :src="d.image" alt="">
                        <p class="swiper-p">{{d.tit}}</p>
                    </a>
                </el-carousel-item>
            </el-carousel>
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
            <div class="list-two">
                <div class="one-head">
                    <img src="@/assets/分类.png" alt="">
                    <p>热门标签</p>
                </div>
                <div class="sm-box">
                    <div class="cot-box">
                        <span
                        v-for="(i,index) in tableData"
                        :key="index"
                        >{{i}}</span>
                    </div>
                </div>
            </div>
        </div>
        <list-context/>
    </div>
</template>

<style scoped>
@import '@/styles/home.css';    
</style>
<script>
// 引入 首页主题下的列表项
import ListContext from "@/components/ListContext.vue";
//引入mock
import instate from "../http/api.js"

// 引入swiper
export default {
    components: { ListContext },
    data() {
        return {
        swiperList: [
            {"image":require('../assets/10002.jpg'),"tit":"很高兴认识你"},
            {"image":require('../assets/10003.png'),"tit":"目前的你又什么和爱好"},
            {"image":require('../assets/10004.png'),"tit":"战争一场行为艺术"},
       ], // 轮播图
        items:[
        {"titie":"写在世界读书日:与书为伴与书同行"},
        {"titie":"卸载手机上的游戏之后我在想什么"},
        {"titie":"再谈博客————快乐、狂欢、独白"},
        {"titie":"朴素生活,高尚思考"},
        {"titie":"阅读、思考、写作"},
        {"titie":"很高兴认识你"},
        ],
        cotlist:"",
        tableData:[]
        };
    },
    methods:{
        //请求mock
        async getList() {
            const arr=await instate.get('/OneRight')
            const { data }=arr.data;
            data.forEach(it=> this.tableData.push(it.rigList));
        }
    },
    created() {
        this.getList();
    }
};
</script>
