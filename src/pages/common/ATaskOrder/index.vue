<script setup lang="ts">
import { Ref, ref } from 'vue';
let name:Ref<string> = ref(" ")
function handleFileUpload(e:any){
    console.log(e.target.files[0].name)
    name.value = String(e.target.files[0].name)
}
</script>
<template>
    <div  class="main">
        <div>
    <div class="task">新建任务</div>
    <input type="file"  ref="file" class="input" v-on:change="handleFileUpload($event)">
</div>
    <div class="title">
        <div>文件名称</div>
        <div>下发时间</div>
        <div>操作</div>
    </div>
<div class="content">
    <div>{{ name }}</div>
    <div>2020.10.9.18.29</div>
    <div class="button">
        <button>下发</button>
        <button>删除</button>
        <button>修改</button>
     </div>
</div>
    </div>
    

</template>
<style>
.main{
    display: flex;
    flex-direction: column;
    
}
.title
{
    display: flex;
    justify-content: center;
}
.title div{
    width: 20%;
    height: 40px;
    margin: 0 2px;
    font-size: 20px;
    line-height: 40px;
    background-color: rgb(68,114,196);
    color: white;
}
.content{
   justify-content: center;
    display: flex;
}
.content div{
    width: 20%;
    height: 40px;
    margin: 0 2px;
    font-size: 20px;
    line-height: 40px;
    background-color: rgb(207,213,234);
    color: white;
}
.button{
    display: flex;
    color: black;
}
.button button{
    width: 30%;
    height: 80%;
    margin: 4px 8px;
    background-color: rgb(68,114,196);
    border-radius: 10px;
}
.task{
    height: 40px;
    width: 100px;
    background-color:rgb(68,114,196) ;
    border-radius: 10px;
    line-height: 40px;
    color: white;
   
}
.input{
    margin-left: 74%;
}
</style>