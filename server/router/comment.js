const express = require('express')
const router = express.Router()

router.get('/logout', (req, res) => {
  res.send('欢迎来到注册页')
})

module.exports = router
