const colors = ["#5470C6", "#EE6666", "#EE6666"];

export const option = {
	// tooltip: {
	// 	trigger: "item",
	// },
	// legend: {
	// 	top: "5%",
	// 	left: "center"	,
	// 	// doesn't perfectly work with our tricks, disable it
	// 	selectedMode: false,
	// },
	series: [
		{
			type: "pie",
			radius: ["40%", "70%"],
			center: ["50%", "50%"],
			// adjust the start angle
			startAngle: 180,
			// label: {
			// 	show: true,
			// 	formatter(param: any) {
			// 		return param.name + " (" + param.percent * 2 + "%)";
			// 	},
			// },
			data: [
				{ value: 1048, name: "Search Engine" },
				{ value: 735, name: "Direct" },
				{ value: 580, name: "Email" },
				{ value: 484, name: "Union Ads" },
				{ value: 300, name: "Video Ads" },
			],
		},
	],
};
