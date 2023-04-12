<script setup lang="ts">
import { routes } from "@/routes";
const roles = ['A', 'B', 'C']
</script>

<template>
	<div class="wrapper">
		<el-container>
      <!-- 顶部 -->
			<el-header>
        <h1>环境监测管理系统</h1>
				<div class="roles">
					<a v-for="role in roles">角色{{ role }}</a>
				</div>
			</el-header>
			<el-container>
        <!-- 侧边栏 -->
				<el-aside width="150px">
					<el-col >
						<el-menu default-active="2" class="menu">
							<el-menu-item v-for="route, index in routes" :index="index" class="router-link">
					      <RouterLink  :to="route.path">{{ route.name }}</RouterLink>
				      </el-menu-item>
						</el-menu>
					</el-col>
				</el-aside>
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
	height: 60px;
	line-height: 60px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
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
