import log from "../utils/log";
const fs = require("fs");
const { resolve } = require("path");

/** 读 任务文件 列表数据 */
export const readFileListData = () => {
	try {
		const filePath = resolve(__dirname, "../modal/file-list.json");
		const fileData = fs.readFileSync(filePath);
		return fileData;
	} catch (err) {
		log.info(err);
	}
};

/** 写 任务文件 列表数据 */
export const writeFileListData = (fileData: string) => {
	try {
		const filePath = resolve(__dirname, "../modal/file-list.json");
		fs.writeFileSync(filePath, fileData);
	} catch (err) {
		log.info(err);
	}
};

/** 读 任务 列表数据 */
export const readTaskListData = () => {
	try {
		const filePath = resolve(__dirname, "../modal/task-list.json");
		const fileData = fs.readFileSync(filePath);
		return fileData;
	} catch (err) {
		log.info(err);
	}
};

/** 写 任务 列表数据 */
export const writeTaskListData = (fileData: string) => {
	try {
		const filePath = resolve(__dirname, "../modal/task-list.json");
		fs.writeFileSync(filePath, fileData);
	} catch (err) {
		log.info(err);
	}
};
