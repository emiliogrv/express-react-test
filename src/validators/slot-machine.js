import { check } from 'express-validator'

export const index = [
  check('currentCoins')
    .exists()
    .isInt()
    .custom(v => v > 0)
]
