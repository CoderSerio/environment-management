const colors = ["#5470C6", "#EE6666", "#EE6666"];

export const option = {
	tooltip: {
		trigger: 'item'
	},
	legend: {
		top: '40%',
		left: '80%',
	},
	series: [
		{
			name: '人员统计',
			type: 'pie',
			radius: ['40%', '70%'],
			center: ['50%', '60%'],
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 18,
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: [
				{ value: 660, name: '工勤岗位' },
				{ value: 500, name: '技术岗位' },
				{ value: 155, name: '管理岗位' },
			]
		}
	]
};
