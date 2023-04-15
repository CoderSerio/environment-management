/** A级用户下发的任务文件 */
export interface TaskOrderTableColumns {
	/** 文件名字 */
	fileName: string;
	/** 下发时间 */
	dispatchTime: string;
}

export const MOCK_DATA: Array<TaskOrderTableColumns> = [
	{
		fileName: "文件名字1",
		dispatchTime: "123456",
	},
];

export const columns = [
	{ label: "文件名称", prop: "fileName" },
	{ label: "下发时间", prop: "dispatchTime" },
];
