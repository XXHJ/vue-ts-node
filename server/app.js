const express = require('express')
const bodyParse = require('body-parser')
const app = express()
const routes = require('./router')

// 拆分路由
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
routes(app)

app.listen(3001, () => {
  console.log('服务启动！')
})
