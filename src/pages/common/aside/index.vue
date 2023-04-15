<script setup lang="ts">
import { routes } from "@/routes";
import {USER_LEVEL ,User,Iroutes} from '@/type' 
import {useUserStore } from '@/stores'
const userStore = useUserStore()


function rightControl(item:string){
  //不需要权限的页面
  if(USER_LEVEL[item] ==0)return true
  //用户未登录直接不显示  ,权限小于不显示
  if(!userStore.getUser.level|| userStore.getUser.level<USER_LEVEL[item] )return false
  return true
}

</script>

<template>
  <el-aside width="150px">
    <el-col >
      <el-menu default-active="2" class="menu">
        <el-menu-item v-for="(item, index) in routes" :index="index" v-show="rightControl(item.rightControl)" class="router-link">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-aside>
</template>

<style scoped>
.menu {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>