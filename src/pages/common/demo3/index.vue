<script lang="ts" setup>
import { reactive } from 'vue';
// 用reactive声明响应式数据
const data = reactive({
  a: 'Hello',
  b: ['w', 'o', 'r', 'l', 'd'],
  c: true
})

</script>

<template>
  <h1>这里是Vue语法示例</h1> 
  <h2>1. 插值语法——能够使用JS变量</h2>
  <div>比如这样：{{ data.a }}</div>
  <hr>
  
  <h2>2. for循环——批量渲染</h2>
  <div>
    比如这样： 
    <span v-for="i in data.b">{{i}}</span>
  </div>
  <hr>
  
  <h2>3. if语句(以及事件绑定)——渲染控制</h2>
  <div>
    比如这样: 
    <button @click="data.c = !data.c">点击切换状态，展示:{{ data.c }}</button>
    <div v-if="data.c">哈哈哈哈</div>
  </div>
  <hr>

  <h2>4. 属性动态绑定——:xxx, html原生属性中使用变量</h2>
  <div>
    比如这样: 这是一个单向绑定
    <input :value="data.a" />
  </div>
  <hr>

  <h2>5. 双向绑定——v-model</h2>
  <div>
    比如这样: 这是一个双向绑定
    <input v-model="data.a" />
  </div>
</template>

<style scoped>

</style>