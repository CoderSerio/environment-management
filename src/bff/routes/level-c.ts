import express, { Request, Response, Router } from "express";
import { readTaskListData } from "../utils/file";
import log from "../utils/log";

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

export default levelC;
