const express = require('express')
const router = express.Router()
const DB = require('../db/mongo')

// 登录
router.post('/api/login', (req, res) => {
  DB.User.findOne({ name: req.body.name }).exec((err, docs) => {
    if (err) {
      console.error(err)
      return
    }
    if (req.body.password === docs.password) {
      res.send({
        code: 200,
        data: {
          name: docs.name,
          id: docs._id
        }
      })
    } else {
      res.send({
        code: 500,
        data: '用户名或密码错误'
      })
    }
  })
})

// 注册
router.post('/api/logup', (req, res) => {
  let data = req.body
  DB.User.findOne({ name: req.body.name }).exec((err, docs) => {
    if (err) {
      console.error(err)
      return
    }
    if (docs) {
      res.send({
        code: 500,
        data: '用户名已注册'
      })
    } else {
      DB.User.create(data, (err) => {
        if (err) {
          res.send({
            code: 500,
            data: '注册失败！'
          })
        }
        res.send({
          code: 200,
          data: '注册成功！'
        })
      })
    }
  })
})

router.get('/api/user', (req, res) => {
  DB.User.findOne({ name: req.query.name }).exec((err, docs) => {
    if (err) {
      console.error(err)
      return
    }
    res.send({
      code: 200,
      data: docs
    })
  })
})

module.exports = router
