// 获取url参数并处理为键值对
interface QueryPair {
	[key: string]: string;
}

// 这个可以抽离，发布成npm包
// 将Query转为键值对
export const getQueryPair = (url: string): QueryPair => {
	const querys = url.split("?")?.[1] ?? "";
	const queryArr: Array<string> = querys.split("&") ?? [];
	const queryPair: QueryPair = {};
	queryArr.forEach((kv) => {
		const defaultKey = Symbol(""); // 防止key为空导致运行报错
		const [k = defaultKey, v = ""] = kv.split("=");
		queryPair[k as string] = v;
	});
	return queryPair;
};

// 将键值对转为Query
export const getQuery = (queryPair: Record<string, any>) => {
	return Object.keys(queryPair)?.reduce((res, key) => {
		return (res += `${key}=${queryPair[key]}&`);
	}, "");
};
