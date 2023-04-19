<script setup lang="ts">
import axios from "axios";
import * as echarts from 'echarts';
import { onMounted, ref } from "vue";
import { getMapData, getCdData } from '@/apis/map'
var shangliu = "https://geo.datav.aliyun.com/areas_v3/bound/510116.json"
var jianyang = "https://geo.datav.aliyun.com/areas_v3/bound/510185.json"
let isShow = ref(false)
//初始化地图函数
var mapInit = (name: string) => {
    var chart = echarts.init(document.getElementById("main") as HTMLBaseElement)
    getMapData(name).then((res: any) => {
        console.log(res)
        echarts.registerMap('cd', res);
        chart.setOption({
            series: [{
                type: 'map',
                map: 'cd'
            }],
        });
    })
    //设置延时函数，避免点击冲突，防止冒泡
    setTimeout(() => {
        chart.on('click', function (params) {
            console.log(params.name)
            isShow.value = true
            mapInit(params.name)
        })
    }, 1000);

}
function goBack() {
    isShow.value = false
    mapInit("成都市")
}
onMounted(() => {
    mapInit("成都市")
})






//     console.log(document.getElementById("main"))
//     console.log(res.data.features[0])
//     echarts.registerMap('cd', res.data);
//         var chart = echarts.init(document.getElementById("main") as HTMLBaseElement );
//         chart.setOption({
//         series: [{
//             type: 'map',
//             map: 'cd'
//         }],
//     });
//     chart.on('click', function(params){
//         axios.get('https://geo.datav.aliyun.com/areas_v3/bound/510129.json').then((res)=>{
//             echarts.registerMap('shuangliu', res.data);
//             chart.setOption({
//         series: [{
//             type: 'map',
//             map: 'shuangliu'
//         }],
//     });
//         })
// 			console.log(params);//此处写点击事件内容
// 		});//点击事件
// })


</script>
<template>
    <el-button type="primary" class="btn" v-if="isShow" size="large" @click="goBack">返回</el-button>
    <div id="main" ref="main" class="map" style="height:600px width:100px">
    </div>
</template>
<style scoped>
.map {
    height: 600px;
    width: 600px;
}

.btn {
    margin-top: 20px;
}
</style>