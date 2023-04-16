interface User {
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
	},
	{
		category: "2016-05-02",
		elename: "John Smith",
		content: "No.1518,  Jinshajiang Road, Putuo District",
	},
	{
		category: "2016-05-02",
		elename: "John Smith",
		content: "No.1518,  Jinshajiang Road, Putuo District",
	},
	{
		category: "2016-05-02",
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

export const tableData: User[] = [
	{
		item: "66666",
		time: "",
		unit: "",
		item2: "",
		status: "",
		operate: "",
	},
	{
		item: "66666",
		time: "231",
		unit: "123",
		item2: "123",
		status: "123",
		operate: "123",
	},
	{
		item: "6",
		time: "",
		unit: "",
		item2: "",
		status: "",
		operate: "",
	},
	{
		item: "6",
		time: "",
		unit: "",
		item2: "",
		status: "",
		operate: "",
	},
];

export const columns = [
	{ label: "项目", prop: "item" },
	{ label: "时间", prop: "time" },
	{ label: "单位", prop: "unit" },
	{ label: "项目", prop: "item2" },
	{ label: "状态", prop: "status" },
];
