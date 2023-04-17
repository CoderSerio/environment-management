import express, { Request, Response, Router } from "express";
import log from "../utils/log";

const common = express.Router();

// 先拦截所有请求打印日志
common.use((req, res, next) => {
	log.info(`Request URL: ${req?.url}`);
	next();
});

// 测试1
common.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

common.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

export default common;
