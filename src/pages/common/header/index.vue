<script lang="ts" setup>
import { useUserStore } from '@/stores';
import { USER_LEVEL,User} from '@/type';
import { router } from '@/routes';
const userStore = useUserStore()

const userAccounts: Array<User> = [
  { id: '123', level: USER_LEVEL.RIGHT_CONTROL_READ_HIEGHT }, 
  { id: '456', level: USER_LEVEL.RIGHT_CONTROL_READ_MID }, 
  { id: '769', level: USER_LEVEL.RIGHT_CONTROL_READ_LOW }
]

const handleSelect = (key: string | number, path: Array<string>) => {
  const activeUser = userAccounts[+key]
  userStore.setUser(activeUser)
  router.push('/')
}
</script>

<template>
  <el-menu
    class="el-menu"
    mode="horizontal"
    :ellipsis="false"
    active-text-color="#42b983"
    @select="handleSelect"
  >
    <h1>环境监测管理系统</h1>
    <div class="flex-grow" />
    <el-sub-menu index="checkout" >
      <template #title>切换账户</template>
      <el-menu-item 
        v-for="i, index in userAccounts" 
        :index="index"
        :key="i.id">
        {{USER_LEVEL[i.level as number]}}级用户
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="username">
      <template #title>用户{{userStore.getUser?.id ?? '--'}}</template>
      <el-menu-item index="0">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
h1 {
  height: 60px;
  line-height: 60px;
  margin-left: 16px;
}
</style>