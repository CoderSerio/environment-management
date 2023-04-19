import { useUserStore } from '@/stores';
import { watch } from 'vue';
const userStore = useUserStore()
let data = [
	{ value: 660, name: '工勤岗位' },
	{ value: 500, name: '技术岗位' },
	{ value: 155, name: '管理岗位' },
]
watch(
	()=>userStore.getMap,
	()=>{
	  data[0].value = Math.round(Math.random()*500);
	  data[1].value = Math.round(Math.random()*400);
	  data[2].value = 1315 - data[0].value - data[1].value
	}
  )
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
			data: data
		}
	]
};
