import express, { Request, Response, Router } from "express";
import {
	readFileListData,
	readTaskListData,
	writeFileListData,
	writeTaskListData,
} from "../utils/file";
import { getQueryPair } from "../utils/query";

const levelA = express.Router();

// 任务文件上传
levelA.get("/upload-file", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());

	// TODO: 先随便写点吧
	const id = Math.floor(1000 * Math.random());
	const demo = {
		name: id,
		info: {
			fileId: id,
			fileName: `测试文件${id}`,
			from: "A123",
			to: "", // 开始是空的，表示没有B执行
			data: {
				title: "这是任务内容示意, 文件格式待定——确定后再补充相关功能",
			},
		},
	};

	data.push(demo);
	writeFileListData(JSON.stringify(data));

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

// A查看文件列表
levelA.get("/get-task-list", (request: Request, response: Response) => {
	const binaryData = readTaskListData();
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
			data: {
				hasMore: true,
				total: 100,
				list: JSON.parse(binaryData),
			},
		})
	);
});

// A下发文件
levelA.get("/dispatch-file", (request, response) => {
	const queryPair = getQueryPair(request.url);
	const binaryData = readTaskListData();
	const data = JSON.parse(binaryData);
	const newData = data.map((item: any) =>
		item?.fileId == queryPair.file_id
			? {
					...item,
					to: "B456",
			  }
			: item
	);
	writeFileListData(JSON.stringify(newData));
});

levelA.get("/test", (request: Request, response: Response) => {
	response.send("这是响应的内容");
});

export default levelA;
