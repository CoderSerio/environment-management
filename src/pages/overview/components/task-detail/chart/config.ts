import { useUserStore } from '@/stores';
import { watch } from 'vue';
const userStore = useUserStore()
let data = [
	{ value: 156, name: "正常" },
	{ value: 19, name: "异常" },
]
watch(
	()=>userStore.getMap,
	(newName,oldName)=>{
	  data[0].value = Math.round(Math.random()*200);
	  data[1].value = 200 - data[0].value
	}
  )
export const option = {
	// tooltip: {
	// 	trigger: "item",
	// },
	// legend: {
	// 	top: "5%",
	// 	left: "center",
	// 	// doesn't perfectly work with our tricks, disable it
	// 	selectedMode: false,
	// },

	series: [
		{
			name: "设备统计",
			type: "pie",
			radius: ["50%", "70%"],
			center: ["50%", "50%"],
			// adjust the start angle
			startAngle: 180,
			label: {
				normal: {
					show: true,
					position: "center",
					color: "#4c4a4a",
					formatter: "{total|" + "类型" + "}" + "\n\r" + "175",
					rich: {
						total: {
							fontSize: 18,
							fontFamily: "微软雅黑",
							color: "#454c5c",
						},
						active: {
							fontFamily: "微软雅黑",
							fontSize: 16,
							color: "#00FFF",
							lineHeight: 30,
						},
					},
				},
				emphasis: {
					//中间文字显示
					show: true,
				},
			},

			data: data,
		},
	],
};
