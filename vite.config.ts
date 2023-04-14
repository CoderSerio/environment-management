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
});
