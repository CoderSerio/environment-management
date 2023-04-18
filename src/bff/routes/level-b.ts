import express, { Request, Response, Router } from "express";
import { readFileListData, readTaskListData, writeTaskListData } from "../utils/file";
import log from "../utils/log";
import { getQueryPair } from "../utils/query";

const levelB = express.Router();

// 测试1
levelB.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

// 创建任务
levelB.post("/create-task", (request, response) => {
	const params = request.body;
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData.toString());

	// TODO: 先随机一个ID
	const id = Math.floor(1000 * Math.random());

	const demo = {
		fileId: params?.fileId,
		taskId: id,
		fileName: `测试文件${params?.fileId}`,
		type: params?.type,
		from: "B456",
		status: 1,
		to: "", // 为空就代表还没下发
		data: params?.fileData,
	};
	// 如果已经存在就覆盖
	const existedIndex = data.find((item: any) => item.taskId === id);
	if (existedIndex >= 0) {
		data[existedIndex] = demo;
	} else {
		data.push(demo);
	}
	writeTaskListData(JSON.stringify(data));

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

// B查看文件列表
levelB.get("/get-file-list", (request: Request, response: Response) => {
	const binaryData = readFileListData();
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

// B查看任务列表
levelB.get("/get-task-list", (request: Request, response: Response) => {
	const binaryData = readTaskListData();
	// 目前的逻辑是to不为空就是下发了的
	const data = JSON.parse(binaryData);
	// .filter((item: any) => item.to);
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

// B下发任务
levelB.get("/dispatch-task", (request, response) => {
	const queryPair = getQueryPair(request.url);
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData);
	const newData = data.map((item: any) =>
		item?.fileId == queryPair.fileId
			? {
					...item,
					to: "789",
			  }
			: item
	);
	writeTaskListData(JSON.stringify(newData));
});

export default levelB;
