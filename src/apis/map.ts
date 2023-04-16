import request from "@/utils/request";
import { resolve } from "path";

const BASE_URL = "https://geo.datav.aliyun.com/areas_v3/bound";
interface map{
	[propName: string]: number
}
const cn2number:map = {
	成都市: 510100,
	都江堰市: 510181,
	彭州市:510182,
	金堂县:510121,
	简阳市:510121,
	双流区:510116,
	新津区:510118,
	蒲江县:510131,
	邛崃市:510183,
	大邑县:510129,
	崇州市:510184,
	青白江区:510113,
	龙泉驿区:510112,
	成华区:510108,
	锦江区:510104,
	武侯区:510107,
	青羊区:510105,
	金牛区:510106,
	郫都区:510117,
	温江区:510115,
	新都区:510114
};

/** 获取 成都市 地图JSON数据 */
export const getCdData: any =  async () => {
	const data = await request.get(`${BASE_URL}/510100_full.json`);
	return data
}
export const getMapData: any = async (name:string) => {
	let num = cn2number[name]
	if(name=="成都市"){
		const data = await request.get(`${BASE_URL}/${num}_full.json`);
		return data;
	}
	else{
		const data = await request.get(`${BASE_URL}/${num}.json`);
		return data;
	}
	
	
};

/** 获取 都江堰 地图JSON数据 */
export const getDuJiangYanMapData = async () => {
	const data = await request.get(`${BASE_URL}/510181.json`);
	return data;
};
