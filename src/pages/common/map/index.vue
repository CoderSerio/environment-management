<script setup lang="ts">
import axios from "axios";
import * as echarts from 'echarts';
import { onMounted } from "vue";
var shangliu = "https://geo.datav.aliyun.com/areas_v3/bound/510116.json"
var jianyang = "https://geo.datav.aliyun.com/areas_v3/bound/510185.json"
onMounted(()=>{
    axios.get('https://geo.datav.aliyun.com/areas_v3/bound/510100_full.json').then((res)=>{
    console.log(document.getElementById("main"))    
    console.log(res.data.features[0])
    echarts.registerMap('cd', res.data);
        var chart = echarts.init(document.getElementById("main") as HTMLBaseElement );
        chart.setOption({
        series: [{
            type: 'map',
            map: 'cd'
        }],
    });
    chart.on('click', function(params){
        axios.get('https://geo.datav.aliyun.com/areas_v3/bound/510129.json').then((res)=>{
            echarts.registerMap('shuangliu', res.data);
            chart.setOption({
        series: [{
            type: 'map',
            map: 'shuangliu'
        }],
    });
        })
			console.log(params);//此处写点击事件内容
		});//点击事件，此事件还可以用到柱状图等其他地图
})
})

</script>
<template>
    <div id="main" name="main" class="map" style="height:600px width:100px">
        </div>
</template>
<style>
.map{
    height: 600px;
    width: 600px;
}
</style>