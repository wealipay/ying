import { defineConfig,CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import dotenv,{DotenvParseOutput} from 'dotenv'
import { env } from 'process'
import { pathToFileURL } from 'url'

export default defineConfig((mode) => {
  const envFileName: string = '.env'
  const curEnvFileName: string = `${envFileName}.${mode.mode}`
  const envData = fs.readFileSync(curEnvFileName)
  const envMap:DotenvParseOutput=dotenv.parse(envData)
  let server:CommonServerOptions={}
  if (mode.mode === 'development') {
    server = {
      host:envMap.VITE_HOST,
      port:envMap.VITE_PORT,
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target:envMap.VITE_PROXY_DOMAIN
        }
      }
    }
    console.log(server)
  }
  else if (mode.mode === 'production') {
  
    console.log(server)
  }
  return {
    resolve: {
      alias: {
        '@':path.join(__dirname,'/src')
      }
    },
    plugins: [vue()],
    server,
    base:'/ying/'
  }
})