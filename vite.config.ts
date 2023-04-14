import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	define: {
		"process.env": {
			LOCAL_HOST: "http://localhost:5173",
		},
	},
	server: { //主要是加上这段代码
		host: '127.0.0.1',
		port: 5173,
		proxy: {
		  '/api': {
			target: 'https://sm.ms/api/v2/upload',	//实际请求地址
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, '')
		  },
		}
	}
});

