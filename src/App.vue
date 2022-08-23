<template>
    <div id="app">
        <!-- 导航栏 -->
        <header-box />
        <router-view />
    </div>
</template>

<style >
</style>
<script>
import HeaderBox from '@/components/HeaderBox.vue';
export default {
  components: {HeaderBox},
};
</script>
