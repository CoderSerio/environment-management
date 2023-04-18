import { useUserStore } from '@/stores';
import { watch } from 'vue';
const userStore = useUserStore()
let data = [
	{ value: 45, name: "固体废物" },
	{ value: 18, name: "土壤和水系沉积物" },
	{ value: 8, name: "水和废水" },
	{ value: 7, name: "环境空气和废气" },
	{ value: 17, name: "声环境" },	
	{ value: 5, name: "污染源" },
]
watch(
	()=>userStore.getMap,
	(newName,oldName)=>{
	  data[0].value = Math.round(Math.random()*50);
	  data[1].value = Math.round(Math.random()*50);
	  data[2].value = Math.round(Math.random()*50);
	  data[3].value = Math.round(Math.random()*50);
	  data[4].value = Math.round(Math.random()*50);
	  data[5].value = Math.round(Math.random()*50);
	}
  )
export const option = {
	// title: {
	// 	text: "Referer of a Website",
	// 	left: "center",
	// },
	tooltip: {
		trigger: "item",
	},
	legend: {
		orient: "vertical",
		left: "76%",
		top: '20%',
	},
	series: [
		{
			name: "资质能力统计",
			type: "pie",
			radius: '50%',
			center: ['47%', '50%'],
			formatter: '{b}\n{d}%',
			data: data,
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},
	],
};
