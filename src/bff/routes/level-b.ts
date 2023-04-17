import express, { Request, Response, Router } from "express";
import log from "../utils/log";

const levelB = express.Router();

// 测试1
levelB.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

// 获取
levelB.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

export default levelB;
