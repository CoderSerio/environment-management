import { Express, Request, Response, Router } from "express";
// import router from "./configs";
import levelA from "./level-a";
import levelB from "./level-b";
import levelC from "./level-c";
import common from "./common";
import log from "../utils/log";

export interface RouterConfig {
	path: string;
	router: Router;
}

const initRoutes = (app: Express) => {
	// 拦截所有请求，记录一条日志之后放行
	app.use((req, res, next) => {
		log.info(`Request URL: ${req?.url}`);
		next();
	});

	app.get("/", (request: Request, response: Response) => {
		response.send("Hello World!!!");
	});

	app.use("/a", levelA);
	app.use("/b", levelB);
	app.use("/c", levelC);
	app.use("/common", common);
};

export default initRoutes;
