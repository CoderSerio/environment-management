import express, { Request, Response, Router } from "express";
import { readTaskListData, writeTaskListData } from "../utils/file";
import log from "../utils/log";
import { getQueryPair } from "../utils/query";

const levelC = express.Router();

// 测试1
levelC.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

// C查看任务列表
levelC.get("/get-task-list", (request: Request, response: Response) => {
	const binaryData = readTaskListData();
	// 目前的逻辑是to不为空就是下发了的
	const data = JSON.parse(binaryData ?? []).filter((item: any) => item.to);
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
			data: {
				hasMore: true,
				total: 100,
				list: data,
			},
		})
	);
});

// C提交任务
levelC.get("/submit-task", (request: Request, response: Response) => {
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData);
	const queryPair = getQueryPair(request?.url);

	data?.forEach((item: any) => {
		if (+item.taskId == +queryPair.taskId) {
			item.status = 4;
		}
	});

	writeTaskListData(JSON.stringify(data));
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

export default levelC;
