/** A级用户下发的任务文件 */

import { TaskFile } from "@/types";

export const MOCK_DATA: Array<Partial<TaskFile>> = [
	{
		fileName: "文件名字1",
	},
];

export const columns = [
	{ label: "文件名称", prop: "fileName" },
	{ label: "下发时间", prop: "dispatchTime", render: (cell: string) => "2023-01-01" },
];
