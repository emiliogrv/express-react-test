import { check } from 'express-validator'

export const index = [
  check('names')
    .exists()
    .isArray()
    .isLength({
      min: 1
    })
]
