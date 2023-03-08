import Koa from 'koa'
import json from 'koa-json'
import body from 'koa-body'
import Router from 'koa-router'

const app=new Koa()
const router=new Router()

router.prefix('/dang')

app.use(json())
app.use(body())

router.get('/test',async(ctx:Koa.Context,next:Koa.Next)=>{
    ctx.body='thus koa '
})

app.use(router.routes())
app.listen(4000)
console.log(999)