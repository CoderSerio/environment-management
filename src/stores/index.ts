import { defineStore } from "pinia";
import { reactive } from "vue";

export enum USER_LEVEL {
	"A" = 10,
	"B" = 20,
	"C" = 30,
}

export type User = {
	id?: string;
	level?: USER_LEVEL;
};

/** 获得全局状态 */
export const useUserStore = defineStore("user", () => {
	/** 当前登录的用户信息 */
	const user = reactive<User>({});

	/** 更新当前登录的用户信息 */
	const updateUser = (info: User) => {
		user.id = info?.id;
		user.level = info?.level;
	};

	return {
		user,
		updateUser,
	};
});
