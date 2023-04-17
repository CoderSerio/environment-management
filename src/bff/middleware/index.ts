import { Express } from "express";
import express from "express";
import responseHeader from "./responseHeader";

const initMiddleware = (app: Express) => {
	app.use(express.json());
	app.use(responseHeader);
};

export default initMiddleware;
