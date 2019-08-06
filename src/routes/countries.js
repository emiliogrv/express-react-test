import { Router } from 'express'
import path from 'path'

const router = new Router()
const filename = path.basename(__filename)

const controller = require(`../controllers/${filename}`)
const validator = require(`../validators/${filename}`)

router
  .get('/', validator.index, controller.index)
  .get('/:name', controller.show)

module.exports = router
