<template>
    <div>
        <p @click="getList">电影</p>
    </div>
</template>
<script>
import instate from "../http/api.js"
export default {
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            const arr=await instate.get('/logo/list')
            const { data }=arr.data
            console.log(data);
            console.log(arr);
        }
    }
};
</script>