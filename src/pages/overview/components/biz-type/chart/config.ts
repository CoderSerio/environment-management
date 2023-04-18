import { useUserStore } from '@/stores';
import { watch } from 'vue';
const userStore = useUserStore()
let data = [234, 145, 478, 458, 167, 245, 267, 347]
watch(
	()=>userStore.getMap,
	(newName,oldName)=>{
	  data[0] = Math.round(Math.random()*300);
	  data[1] = Math.round(Math.random()*300);
	  data[2] = Math.round(Math.random()*300);
	  data[3] = Math.round(Math.random()*300);
	  data[4] = Math.round(Math.random()*300);
	  data[5] = Math.round(Math.random()*300);
	  data[6] = Math.round(Math.random()*300);
	  data[7] = Math.round(Math.random()*300);
	}
  )
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
			data: data,
			type: "bar",
			showBackground: true,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)",
			},
		},
	],
};
