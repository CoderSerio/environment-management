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
levelB.get("/create-task", (request, response) => {
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData.toString());

	// TODO: 先随便写点吧
	const id = Math.floor(1000 * Math.random());
	const demo = {
		name: id,
		info: {
			fileId: id,
			fileName: `测试文件${id}`,
			from: "B456",
			to: "", // 为空就代表还没下发
			data: {
				title: "这是任务内容示意, 文件格式待定——确定后再补充相关功能",
			},
		},
	};

	data.push(demo);
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

// B下发任务
levelB.get("/dispatch-task", (request, response) => {
	const queryPair = getQueryPair(request.url);
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData);
	const newData = data.map((item: any) =>
		item?.fileId == queryPair.file_id
			? {
					...item,
					to: "789",
			  }
			: item
	);
	writeTaskListData(JSON.stringify(newData));
});

export default levelB;
