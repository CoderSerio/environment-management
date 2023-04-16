export interface SubmissionTableColumns {
	class: string;
	location: string;
	GPS: string;
	program: string;
	taskLoad: string;
	execTimes: string;
	filename: string;
	time: string;
	adjustTime: string;
}

export const MOCK_DATA: Array<SubmissionTableColumns> = [
	{
		class: "Class 1",
		location: "Location 1",
		GPS: "GPS 1",
		program: "Program 1",
		taskLoad: "Task Load 1",
		execTimes: "Exec Times 1",
		filename: "filename 1",
		time: "time 1",
		adjustTime: "adjustTime 1",
	},
	{
		class: "Class 2",
		location: "Location 2",
		GPS: "GPS 2",
		program: "Program 2",
		taskLoad: "Task Load 2",
		execTimes: "Exec Times 2",
		filename: "filename 2",
		time: "time 2",
		adjustTime: "adjustTime 2",
	},
	{
		class: "Class 3",
		location: "Location 3",
		GPS: "GPS 3",
		program: "Program 3",
		taskLoad: "Task Load 3",
		execTimes: "Exec Times 3",
		filename: "filename 3",
		time: "time 3",
		adjustTime: "adjustTime 3",
	},
	{
		class: "Class 4",
		location: "Location 4",
		GPS: "GPS 4",
		program: "Program 4",
		taskLoad: "Task Load 4",
		execTimes: "Exec Times 4",
		filename: "filename 4",
		time: "time 4",
		adjustTime: "adjustTime 4",
	},
];

export const columns = [
	{ label: "类别", prop: "class" },
	{ label: "点位名称", prop: "location" },
	{ label: "GPS", prop: "GPS" },
	{ label: "项目", prop: "program" },
	{ label: "任务量", prop: "taskLoad" },
	{ label: "执行次数", prop: "execTimes" },
	{ label: "文件名", prop: "filename" },
];
