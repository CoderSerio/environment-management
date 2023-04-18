import axios from "axios";
import { BFF_PORT } from "@/bff/config";

const instance = axios.create({
	timeout: 6000,
	baseURL: `${process.env.BASE_URL}:${BFF_PORT}`,
});

instance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {}
);

const request = {
	get: (url: string, params: any = {}) => {
		const res = instance.get(url, { params: params });
		return res;
	},
	post: async (url: string, data: any = "") => {
		const res = await instance.post(url, data);
		return res;
	},
};

export default request;
