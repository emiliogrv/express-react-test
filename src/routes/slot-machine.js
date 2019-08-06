import { Router } from 'express'
import path from 'path'

const filename = path.basename(__filename)
const router = new Router()

const controller = require(`../controllers/${filename}`)
const validator = require(`../validators/${filename}`)

router.get('/', validator.index, controller.index)

module.exports = router
