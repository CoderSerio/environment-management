/** 任务 */
export interface Task {
	taskId: string; // 主键，任务id
	fileId: string; // 外键1，表示来自哪个文件
	totalTimes: number; // 需要执行的总次数
	currentTimes: number; // 当前执行次数
	status: number; // 当前状态，枚举： 5已完成/4待审核/3被驳回/2执行中/1待下发/0未知or全部
	from: string; // 下发人，B级用户id
	to: string; // 执行人，C级用户id——为空表示还没有下发
	type: number; // 任务类型，枚举：2污染物/1环境监测/0未知or全部
	data: string; // 文件的具体内容, 直接存一个JSON就行，前端给什么存什么
}

/** 任务文件 */
export interface TaskFile {
	fileId: string; // 主键，文件id, 同时也是uri————通过这个从图床取获取到文件的具体信息
	fileName: string;
	from: string; // 下发人，A级用户id
	to: string; // 执行人，B级用户id————为空表示还没有下发
	data: string; // 文件的具体内容, 直接存一个JSON就行，前端给什么存什么
}

/** 用户 */
export interface User {
	username: string;
	password: string; // 记得加密
	userId: string;
	level: number; // 枚举（隔开一点，考虑后续追加）30-A/20-B/10-C/0-未知or全部
}
