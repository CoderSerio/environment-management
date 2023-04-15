import { defineStore } from "pinia";
import { USER_LEVEL,User } from "@/type";



const defaultUser = window.sessionStorage.getItem('userInfo')?? {id:'未登录'}
console.log(defaultUser,'!!!!!!!!!!!!!!')
/** 获得全局状态 */
export const useUserStore = defineStore("user", {
	state:()=>({
		//占时默认参数后续添加持久化
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
	/** 当前登录的用户信息 */
	// const user = reactive<User>({});

	// /** 更新当前登录的用户信息 */
	// const updateUser = (info: User) => {
	// 	user.id = info?.id;
	// 	user.level = info?.level;
	// };

	// return {
	// 	user,
	// 	updateUser,
	// };
})
