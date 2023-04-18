import request from "@/utils/request";

/** A上传文件 */
export const uploadFile = async () => {
	const res = await request.get("/a/upload-file");
	console.log(res);
	return res;
};

/** A查看文件列表 */
export const getFileList = async () => {
	const res = await request.get("/a/upload-file");
	console.log(res);
	return res;
};
