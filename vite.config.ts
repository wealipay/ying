import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;
  console.log(curEnvFileName)
  return {
    plugins: [vue()],
  };
});
