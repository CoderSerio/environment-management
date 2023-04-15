import request from "@/utils/request";

const BASE_URL = "https://geo.datav.aliyun.com/areas_v3/bound";

const cn2number = {
	成都市: 510100,
	都江堰市: 510181,
};

/** 获取 成都市 地图JSON数据 */
export const getMapData: any = async () => {
	const data = await request.get(`${BASE_URL}/510100_full.json`);
	return data;
};

/** 获取 都江堰 地图JSON数据 */
export const getDuJiangYanMapData = async () => {
	const data = await request.get(`${BASE_URL}/510181.json`);
	return data;
};
