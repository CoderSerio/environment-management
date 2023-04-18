/** 污染物任务列表表头 */
export interface ContaminantTableColumns {
	/** 关联文件 */
	fileId: string;
	/** 市级行政区 */
	district: string;
	/** 类别 */
	class: Array<string>;
	/** 企业名称 */
	companyName: string;
	/** 承担组织 */
	undertakenOrganization: string;
	/** 频次 */
	frequency: string;
}

export const MOCK_DATA: Array<ContaminantTableColumns> = [
	{
		fileId: "1",
		district: "市区1",
		class: ["类别1"],
		undertakenOrganization: "1",
		frequency: "1",
		companyName: "1",
	},
];

export const columns = [
	{ label: "关联文件", prop: "fileId" },
	{ label: "市级行政区", prop: "district" },
	{ label: "类别", prop: "class", render: (cell: Array<string>) => cell?.join("、") },
	{ label: "企业名称", prop: "companyName" },
	{ label: "承担单位", prop: "undertakenOrganization" },
	{ label: "频次", prop: "frequency" },
];
