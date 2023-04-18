import request from "@/utils/request";

export const uploadTaskFile = async () => {
	const res = await request.get("/a/upload-task-file");
	console.log(res);
};
