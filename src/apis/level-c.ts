import request from "@/utils/request";

export const getTaskList = async () => {
	const res = await request.get(`/c/get-task-list`);
	console.log(res);
	return res;
};

// TODO: 改错了，这里被b错误调用了
// 提交任务
export const submitTask = async (params: { taskId: string; adjustRes: number }) => {
	const res = await request.get(
		`/c/submit-task?taskId=${params.taskId}&adjustRes=${params.adjustRes}`
	);
	console.log(res);
	return res;
};
