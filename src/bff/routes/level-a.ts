import express, { Request, Response, Router } from "express";
import {
	readFileListData,
	readTaskListData,
	writeFileListData,
	writeTaskListData,
} from "../utils/file";
import { getQueryPair } from "../utils/query";

const levelA = express.Router();

// A文件上传
levelA.get("/upload-file", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());

	// TODO: 先随便写点吧
	const id = Math.floor(1000 * Math.random());
	const demo = {
		fileId: `${id}`,
		fileName: `测试文件${id}`,
		from: "A123",
		to: "", // 开始是空的，表示没有B执行
		data: {
			title: "这是任务内容示意, 文件格式待定——确定后再补充相关功能",
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
levelA.get("/get-file-list", (request: Request, response: Response) => {
	const binaryData = readFileListData();
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
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData);
	const newData = data.map((item: any) =>
		item?.fileId == queryPair.fileId
			? {
					...item,
					to: "B456",
			  }
			: item
	);
	writeFileListData(JSON.stringify(newData));
	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

levelA.get("/test", (request: Request, response: Response) => {
	response.send("这是响应的内容");
});


//文件删除(没测过)
levelA.get("/delete-file", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	const num = data.findIndex((obj: any) => {
		return obj.fileId === queryPair.fileId;
	});

	data.splice(num, 1);

	writeFileListData(JSON.stringify(data));

	response.send(
		JSON.stringify({
			status: 200,
			msg: "",
		})
	);
});

//查看进度列表(应该过了)
levelA.get("/get-progress-list", (request, response) => {
	const binaryData = readFileListData();
	const data = JSON.parse(binaryData.toString());
	const queryPair = getQueryPair(request.url);
	const newdata = data.filter((obj: any) => {
		return obj.from === "A123";
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

export default levelA;
