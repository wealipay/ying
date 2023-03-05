import { defineConfig, CommonServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import dotenv, { DotenvParseOutput } from "dotenv";

export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;
  const envData = fs.readFileSync(curEnvFileName);
  let server: CommonServerOptions = {};
  const envMap: DotenvParseOutput = dotenv.parse(envData);
  if (mode.mode === "development") {
      server = {
          host: envMap.VITE_HOST,
          port: envMap.VITE_PORT,
          proxy: {
              [envMap.VITE_BASE_URL]: {
                  target:envMap.VITE_PROXY_DOMAIN
              }
          }
      }
      console.log(server)
  }
  else if (mode.mode === 'production') {
      server = {
          host:envMap.VITE_HOST,
          port:envMap.VITE_PORT
      }
    }

  return {
      plugins: [vue()],
      server
  };
});
