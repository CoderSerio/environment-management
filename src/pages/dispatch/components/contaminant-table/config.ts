/** 污染物任务列表表头 */
export interface ContaminantTableColumns {
	/** 市级行政区 */
	district: string;
	/** 类别 */
	class: string;
	/** 企业名称 */
	companyName: string;
	/** 承担组织 */
	undertakenOrganization: string;
	/** 频次 */
	frequency: string;
	/** 下发来源 */
	// dispatchSource: string
	// /** 下发来源姓名，只有B级用户下发时才显示 */
	// dispatcherName: string
	// /** 下发时间 */
	// dispatchTime: string
}

export const MOCK_DATA: Array<ContaminantTableColumns> = [
	{
		district: "市区1",
		class: "类别1",
		undertakenOrganization: "1",
		frequency: "1",
		companyName: "1",
	},
];

export const columns = [
	{ label: "市级行政区", prop: "district" },
	{ label: "类别", prop: "class" },
	{ label: "企业名称", prop: "companyName" },
	{ label: "承担单位", prop: "undertakenOrganization" },
	{ label: "频次", prop: "frequency" },
];
