<template>
    <div>
        <p @click="getList"
        v-for="(i,index) in list"
        :key="index"
        >{{i}}</p>
    </div>
</template>
<script>
import instate from "../http/api.js"
export default {
    data() {
        return {
            list:[],
        }
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            const arr=await instate.get('/OneRight')
            const { data }=arr.data;
            data.forEach(it=> this.list.push(it.rigList));
        }
    }
};
</script>