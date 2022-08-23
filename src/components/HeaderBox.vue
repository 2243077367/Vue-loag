<template>
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
                    <router-link to="/routines">纪事随想</router-link>
                </div>
                <div class="nav-list">
                    <img src="@/assets/胶卷电影.png" alt="">
                    <router-link to="/movie">书影略览</router-link>
                </div>
                <div class="heart-loader"></div>
                </div>    
            </nav>
    </div>
</template>
<style>
@import '@/styles/nav.css';
</style>