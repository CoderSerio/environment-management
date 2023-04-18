import express from "express";
import log from "./utils/log";
import { BFF_PORT } from "./config";
import initRoutes from "./routes";

const app = express();
app.use(express.json());

app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.listen(BFF_PORT, () => {
	initRoutes(app);
	log.info(`BFF is starting on the port: ${BFF_PORT}`);
});
