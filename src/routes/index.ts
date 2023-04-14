import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "首页",
		component: () => import(/* webpackChunkName: "home" */ "@/pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "登录页",
		component: () => import(/* webpackChunkName: "login" */ "@/pages/login/index.vue"),
	},
	{
		path: "/test-page",
		name: "开发测试页",
		component: () => import(/* webpackChunkName: "test" */ "@/pages/test-page/index.vue"),
	},
	{
		path: "/dispatch",
		name: "任务下发",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/dispatch/index.vue"),
	},
	{
		path: "/count",
		name: "任务统计",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/count/index.vue"),
	},
	{
		path: "/adjust",
		name: "任务审核",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/adjust/index.vue"),
	},
	{
		path: "/my-task",
		name: "我的任务",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/my-task/index.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
