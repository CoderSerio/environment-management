import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
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
