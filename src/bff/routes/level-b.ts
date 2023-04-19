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
		currentTimes: 0,
		frequency: params?.fileData?.frequency || 0,
		data: { ...params?.fileData, taskId: id },
	};
	// TODO: 如果已经存在就覆盖————现在这个逻辑要改，改为传参判断
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
	const newData = data.map((item: any) => {
		const newItem =
			item?.taskId == queryPair.taskId
				? {
						...item,
						to: "789C",
						status: 2,
				  }
				: item;
		newItem.data.to = "789C";
		return newItem;
	});
	writeTaskListData(JSON.stringify(newData));
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

// 任务删除(过)
levelB.get("/delete-task", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	const num = data.findIndex((obj: any) => {
		return obj.taskId === queryPair.taskId;
	});

	if (num != -1) data.splice(num, 1);

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
levelB.get("/adjust-task", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	//queryPair.passanswer = "true";
	//我们假设通过为true，可能会有两个按钮，我们假设按钮传进来的值为passanswer
	// dajustRes 1 通过 0 驳回
	const index = data.findIndex((obj: any) => {
		return obj.taskId === queryPair.taskId;
	});
	if (index != -1) {
		data[index].currentTimes = +data[index].currentTimes + +queryPair.adjustRes;
		if (+data[index].currentTimes >= +data[index].frequency) {
			// 通过，彻底完成任务
			data[index].status = 5;
		} else {
			// 通过，继续执行
			data[index].status = 2;
		}
	} else {
		// 被驳回
		data[index].status = 3;
	}
	writeTaskListData(JSON.stringify(data));

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

export default levelB;
