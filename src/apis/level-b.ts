import request from "@/utils/request";

/** B创建任务 */
export const createTask = async (params: { fileId: string; userId: string }) => {
	// 暂时不管用户id
	const res = await request.get("/b/dispatch-file");
	console.log(res);
	return res;
};

/** B查看任务列表 */
export const getTaskList = async () => {
	const res = await request.get("/b/get-task-list");
	console.log(res);
	return res;
};

/** B查看文件列表 */
export const getFileList = async () => {
	const res = await request.get("/b/get-file-list");
	console.log(res);
	return res;
};

/** B下发任务 */
export const dispatchTask = async (params: { taskId: string; userId: string }) => {
	const res = await request.get("/b/dispatch-task");
	console.log(res);
	return res;
};
