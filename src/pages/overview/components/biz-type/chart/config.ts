export const option = {
	xAxis: {
		type: "category",
		data: ["类别1", "类别2", "类别3", "类别4", "类别5", "类别6", "类别7", "类别8"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [234, 145, 478, 458, 167, 245, 267, 347],
			type: "bar",
			showBackground: true,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)",
			},
		},
	],
};
