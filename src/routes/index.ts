import { createRouter, createWebHashHistory } from "vue-router";
import { Iroutes,USER_LEVEL } from "@/type";
import { useUserStore } from "@/stores";

export const routes:Iroutes[] = [
	{
		path: "/",
		name: "首页",
		rightControl:'RIGHT_CONTROL_NONE',
		component: () => import(/* webpackChunkName: "home" */ "@/pages/home/index.vue"),
	},
	{
		path: "/login",
		name: "登录页",
		rightControl:'RIGHT_CONTROL_NONE',
		component: () => import(/* webpackChunkName: "login" */ "@/pages/login/index.vue"),
	},
	{
		path: "/test-page",
		name: "开发测试页",
		rightControl:'RIGHT_CONTROL_NONE',
		component: () => import(/* webpackChunkName: "test" */ "@/pages/test-page/index.vue"),
	},
	{
		path: "/dispatch",
		name: "任务下发",
		rightControl:'RIGHT_CONTROL_READ_HIEGHT',
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/dispatch/index.vue"),
	},
	{
		path: "/count",
		name: "任务统计",
		rightControl:'RIGHT_CONTROL_READ_HIEGHT',
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/count/index.vue"),
	},
	{
		path: "/adjust",
		name: "任务审核",
		rightControl:'RIGHT_CONTROL_READ_MID',
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/adjust/index.vue"),
	},
	{
		path: "/my-task",
		name: "我的任务",
		rightControl:'RIGHT_CONTROL_READ_LOW',
		component: () => import(/* webpackChunkName: "data-list" */ "@/pages/my-task/index.vue"),
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});




