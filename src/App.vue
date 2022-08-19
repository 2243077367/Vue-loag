<template>
    <div id="app">
        <!-- 导航栏 -->
        <div class="nav-box">
            <nav>
                <div class="login">
                    <router-link to="/">
                    <img src="@/assets/login.png" alt=""></router-link> 
                </div>
                <div class="nav-con flx">
                    <div class="nav-list">
                        <img src="@/assets/文件夹.png" alt="">
                        <router-link to="/about">包罗万象</router-link>
                    </div>
                    <div class="nav-list">
                        <img src="@/assets/笔记.png" alt="">
                        <router-link to="/rount">纪事随想</router-link>
                    </div>
                    <div class="nav-list">
                        <img src="@/assets/胶卷电影.png" alt="">
                        <router-link to="/movie">书影略览</router-link>
                    </div>
                      <div class="heart-loader"></div>
                </div>    
            </nav>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/styles/nav.css';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body{
    background: rgb(241,241,241);
}
*{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style: none;
}
.flx{display:flex;}
.fl{float: left;}
.fr{float: right;}

</style>
<script>
// export default {
//     methods:{
//         tiao() {
//             this.$router.push('/movie');
//         }
//     }
// };
</script>
