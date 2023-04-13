<script setup lang="ts">
import { routes } from "@/routes";
</script>

<template>
  <el-aside width="150px">
    <el-col >
      <el-menu default-active="2" class="menu">
        <el-menu-item v-for="route, index in routes" :index="index" class="router-link">
          <RouterLink  :to="route.path">{{ route.name }}</RouterLink>
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