export interface HistoryViewTableColumns {
	class: string;
	program: string;
	location: string;
	GPS: string;
	uploadTime: string;
	adjustStatus: string;
	adjustTime: string;
}

export const MOCK_DATA: Array<HistoryViewTableColumns> = [
	{
		class: "文件名字1",
		location: "123456",
		GPS: "123456",
		program: "123456",
		uploadTime: "123456",
		adjustStatus: "123",
		adjustTime: "123456",
	},
];

export const columns = [
	{ label: "类别", prop: "class" },
	{ label: "点位名称", prop: "location" },
	{ label: "GPS", prop: "GPS" },
	{ label: "项目", prop: "program" },
	{ label: "上传文件上传时间", prop: "uploadTime" },
	{ label: "审核状态", prop: "adjustStatus" },
	{ label: "审核时间", prop: "adjustTime" },
];
