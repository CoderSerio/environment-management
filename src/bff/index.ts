import express from "express";
import log from "./utils/log";
import { BFF_PORT } from "./config";
import initRoutes from "./routes";

const app = express();
app.use(express.json());

app.listen(BFF_PORT, () => {
	initRoutes(app);
	log.info(`BFF is starting on the port: ${BFF_PORT}`);
});
