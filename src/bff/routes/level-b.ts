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
		fileId: id,
		fileName: `测试文件${id}`,
		from: "B456",
		to: "", // 为空就代表还没下发
		data: {
			title: "这是任务内容示意, 文件格式待定——确定后再补充相关功能",
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
		item?.fileId == queryPair.fileId
			? {
					...item,
					to: "789",
			  }
			: item
	);
	writeTaskListData(JSON.stringify(newData));
});

//任务删除(过)
levelB.get("/delete-task", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	const num = data.findIndex((obj: any) => {
		return obj.taskId === queryPair.taskId;
	});

	if (num != -1)data.splice(num, 1);

	writeTaskListData(JSON.stringify(data));

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
			data: data,
		})
	);
});

//查看进度列表(copy a的应该过了吧)
levelB.get("/get-task-progress", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	const newdata = data.filter((obj: any) => {
		return obj.from === queryPair.from;
	});
	
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
			data: {
				hasMore: true,
				total: 100,
				list: newdata,
			},
		})
	);
});

//b审核c的提交(没测过)
levelB.get("/task-pass", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	//queryPair.passanswer = "true";
	//我们假设通过为true，可能会有两个按钮，我们假设按钮传进来的值为passanswer

	if (queryPair.passanswer === "true"){
		const num = data.findIndex((obj: any) => {
			return obj.taskId === queryPair.taskId;
		});
		if (num != -1)data[num].status += 1;
		writeTaskListData(JSON.stringify(data));
	}

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
			date: data,
		})
	);
});

export default levelB;
