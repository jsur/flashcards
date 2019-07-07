const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))

router.get('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
