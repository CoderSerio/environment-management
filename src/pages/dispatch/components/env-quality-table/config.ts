/** 污染物任务列表表头 */
export interface EnvQualityTableColumns {
	/** 关联文件 */
	fileId: string;
	/** 类别 */
	class: Array<string>;
	/** 点位名称 */
	pointName: string;
	/** GPS */
	gps: string;
	/** 项目 */
	program: string;
	/** 承担单位 */
	undertakenOrganization: string;
	/** 频次 */
	frequency: string;
}

export const MOCK_DATA: Array<EnvQualityTableColumns> = [
	{
		fileId: "1",
		class: ["类别2"],
		pointName: "1",
		undertakenOrganization: "1",
		frequency: "1",
		gps: "1",
		program: "1",
	},
];

export const columns = [
	{ label: "关联文件", prop: "fileId" },
	{ label: "类别", prop: "class", render: (cell: Array<string>) => cell?.join("、") },
	{ label: "点位名称", prop: "pointName" },
	{ label: "GPS", prop: "gps", render: (cell: Array<string>) => "1" },
	{ label: "项目", prop: "program" },
	{ label: "承担单位", prop: "undertakenOrganization" },
	{ label: "频次", prop: "frequency" },
];
