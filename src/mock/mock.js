let Mock=require('mockjs')
Mock.mock('/logo/list','get',function(config){
    console.log(config);
    return {
        name:'111'
    }
})