import express, { Request, Response, Router } from "express";
import { readTaskListData, writeTaskListData } from "../utils/file";

const levelA = express.Router();

// 测试1
levelA.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

// 任务文件上传
levelA.get("/upload-task-file", (request, response) => {
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData.toString());

	// TODO: 先随便写点吧
	const id = Math.floor(1000 * Math.random());
	const demo = {
		fileId: id,
		fileName: `测试文件${id}`,
	};

	data.push(demo);
	writeTaskListData(JSON.stringify(data));
	console.log(data);
});

export default levelA;
