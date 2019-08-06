import { Router } from 'express'

const router = new Router()

router.get('/', function(req, res, next) {
  res.json({ message: 'Welcome buddy!' })
})

module.exports = router
