<script lang="ts" setup>
import { useUserStore } from '@/stores';
import { USER_LEVEL, User, USER_LEVEL_TEXT } from '@/type';
import { ElMessage } from "element-plus";
import { router } from '@/routes';
const userStore = useUserStore()

const userAccounts: Array<User> = [
  { id: '123A', level: USER_LEVEL.RIGHT_CONTROL_READ_HEIGHT },
  { id: '456B', level: USER_LEVEL.RIGHT_CONTROL_READ_MID },
  { id: '769C', level: USER_LEVEL.RIGHT_CONTROL_READ_LOW },
  { id: '000', level: USER_LEVEL.RIGHT_CONTROL_NONE },
]

const handleSelect = (key: string | number, path: Array<string>) => {
  const activeUser = userAccounts[+key]
  userStore.setUser(activeUser)
  key == 3 ? ElMessage.success('退出成功') : ElMessage.success('切换用户成功')
  router.push('/login')
}
</script>

<template>
  <el-menu class="el-menu" mode="horizontal" :ellipsis="false" active-text-color="#42b983" @select="handleSelect">
    <h1>环境监测管理系统</h1>
    <div class="flex-grow" />
    <el-sub-menu index="checkout">
      <template #title>切换账户</template>
      <el-menu-item v-for="i, index in userAccounts" :index="index" v-show="i.id !== '000'" :key="i.id">
        {{ USER_LEVEL_TEXT[i.level ?? 0] }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="username">
      <template #title>{{ userStore.getUser?.id === '000' ? '未登录' : userStore.getUser?.id }}</template>
      <el-menu-item index="3" key="000">退出登录</el-menu-item>
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