<template>
    <div class="list-wrapper">
        <ul class="list-ul">
            <li>
                <div class="li-lef"></div>
                <div class="li-cen">
                    <img src="" alt="">
                    <div class="mask">包罗万象</div>
                </div>
                <div class="li-rig">
                    <p class="fw-bold">MySQL函数与存储过程字符串长度限制的解决</p>
                    <p class="gray">MysQL函教或者存储过程中使用goup. cncaO函数导致数据字符过长而报错CREATE DEINRE= rot @% PROCEDURE get pipe cildtIN in pe2e.</p>
                    <div class="li-smbox">
                        <p class="day gray">2022-08-16</p>
                        <p class="more">阅读全文</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.list-wrapper {
  width: 780px;
  float: left;
}
.list-ul li{
    height: 160px;
    background-color: white;
    margin-top:15px;
    border-radius: 10px;
    display: flex;
    padding-top: 20px;
}
.li-lef{
    width: 6px;
    height: 0;
    transition: .4s;
    margin-right: 10px;
    border-radius: 20px;
}
.li-cen{
    width: 210px;
    height: 136px;
    border:3px solid #ccc;
    border-radius:10px;
    margin-right: 15px;
    position: relative;
}
.li-rig{
    width: 525px;
    display: flex;
    flex-direction: column;
}
.li-smbox{
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
}
.fw-bold{
    font-weight: bold;
}
.gray{
    color: gray;
    line-height: 30px;
}
.more{
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: wheat;
    background: #3690d8;
    border-radius:5px;
    opacity: 0;
}
/* 遮罩 */
.mask{
    width: 100px;
    height: 35px;
    opacity: 0.4;
    border-radius:0 10px 10px 0;
    background: red;
}
/* 以下为特效样式 */
li:hover{
    border: 2px dotted #3690d8;
}
li:hover .li-lef{
    height: 20px;
    background: blue;
}
li:hover .more{
    opacity: 1;
    transition: 1s;
}

</style>