import request from "@/utils/request";

export const getTaskList = async () => {
	const res = await request.get(`/c/get-task-list`);
	console.log(res);
	return res;
};
