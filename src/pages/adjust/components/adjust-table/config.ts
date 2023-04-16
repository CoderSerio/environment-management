/** 审核状态枚举 */
export enum ADJUST_STATUS {
	/** 全部状态/未知状态 */
	"ALL" = 0,
	/** 待审核 */
	"PENDING" = 1,
	/** 通过 */
	"APPROVAL",
	/** 驳回 */
	"REJECT",
}

export const adjustStatus = {
	[ADJUST_STATUS.PENDING]: "待审核",
	[ADJUST_STATUS.APPROVAL]: "通过",
	[ADJUST_STATUS.REJECT]: "驳回",
};

export interface AdjustTableColumns {
	item: string;
	time: string;
	unit: string;
	item2: string;
	status: string;
	operate: string;
}

export const gridData = [
	{
		category: "2016-05-02",
		elename: "John Smith",
		content: "6",
		threshold: "1",
	},
	{
		category: "2016-05-02",
		elename: "John Smith",
		threshold: "1",
		content: "No.1518,  Jinshajiang Road, Putuo District",
	},
	{
		category: "2016-05-02",
		threshold: "1",
		elename: "John Smith",
		content: "No.1518,  Jinshajiang Road, Putuo District",
	},
	{
		category: "2016-05-02",
		threshold: "1",
		elename: "John Smith",
		content: "No.1518,  Jinshajiang Road, Putuo District",
	},
];

export const cities = [
	{
		item: "全部",
		label: "全部",
	},
	{
		value: "待审核",
		label: "待审核",
	},
	{
		value: "通过",
		label: "通过",
	},
	{
		value: "打回",
		label: "打回",
	},
];

export const tableData: AdjustTableColumns[] = [
	{
		item: "66666",
		time: "2022",
		unit: "123",
		item2: "123",
		status: adjustStatus[ADJUST_STATUS.PENDING],
		operate: "123",
	},
	{
		item: "项目1",
		time: "2020",
		unit: "123",
		item2: "123",
		status: adjustStatus[ADJUST_STATUS.PENDING],
		operate: "123",
	},
	{
		item: "66666",
		time: "231",
		unit: "123",
		item2: "123",
		status: adjustStatus[ADJUST_STATUS.PENDING],
		operate: "123",
	},
];

export const columns = [
	{ label: "项目", prop: "item" },
	{ label: "时间", prop: "time" },
	{ label: "单位", prop: "unit" },
	{ label: "状态", prop: "status" },
];
