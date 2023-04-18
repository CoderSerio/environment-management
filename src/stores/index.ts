import { defineStore } from "pinia";
import {User } from "@/type";


const userNone:User={
	id:'未登录',
	level:0
}
// 获取持久化状态
const defaultUser =JSON.parse(window.sessionStorage.getItem('userInfo')|| JSON.stringify(userNone)) 
/** 获得全局状态 */
export const useUserStore = defineStore("user", {
	state:()=>({
		user:defaultUser as User
	}),
	getters:{
		getUser(state){
			return state.user
		}
	},
	actions:{
		setUser(val:User){
			// 持久化存储
			console.log(JSON.stringify(val))
			window.sessionStorage.setItem('userInfo',JSON.stringify(val))
			this.$state.user = val
		}
	}
})
