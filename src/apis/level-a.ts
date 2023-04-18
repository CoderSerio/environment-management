import request from "@/utils/request";

/** A上传文件 */
export const uploadFile = async () => {
	const res = await request.get("/a/upload-file");
	console.log(res);
	return res;
};

/** A查看文件列表 */
export const getFileList = async () => {
	const res = await request.get("/a/get-file-list");
	console.log(res);
	return res;
};

/** A下发文件 */
export const dispatchFile = async (params: { fileId: string; userId: string }) => {
	// 暂时不管用户id
	const res = await request.get(`/a/dispatch-file?fileId=${params.fileId}&userId=${params.userId}`);
	console.log(res);
	return res;
};
