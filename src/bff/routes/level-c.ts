import express, { Request, Response, Router } from "express";
import log from "../utils/log";

const levelC = express.Router();

// 测试1
levelC.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

// 获取
levelC.get("/test", (request: Request, response: Response) => {
	response.send("test!!!");
});

export default levelC;
