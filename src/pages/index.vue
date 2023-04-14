<script setup lang="ts">
import Header from '@/pages/common/header/index.vue'
import Aside from '@/pages/common/aside/index.vue'
</script>

<template>
	<div class="wrapper">
		<el-container>
      <!-- 顶部 -->
			<el-header>
				<Header />
			</el-header>
			<el-container>
        <!-- 侧边栏 -->
				<Aside />
        <!-- 主体 -->
				<el-main>
          <RouterView />
        </el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped>
.wrapper {
	height: 100vh;
	width: 100vw;
}
.el-header {
	padding: 0;
}
h1 {
  margin: 0 16px;
}
.roles {
	display: flex;
  flex-direction: end;
	gap: 16px;
  margin-right: 48px;
}
.router-link {
  text-align: center;
}
.menu {
  width: 100%;
  height: calc(100vh - 60px);
}
.el-main {
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
