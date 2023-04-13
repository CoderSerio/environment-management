import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "首页",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "登录页",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/login/index.vue"),
	},
	{
		path: "/test-page",
		name: "开发测试页",
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/test-page/index.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
