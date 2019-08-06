import axios from 'axios'
import { countBy, each } from 'lodash'
import { validateRequest } from '../tools'

function getRandomIntInclusive(min = 0, max = 7) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getTypeQuantities() {
  const spot = getRandomIntInclusive()

  const reel1 = [
    'cherry',
    'lemon',
    'apple',
    'lemon',
    'banana',
    'banana',
    'lemon',
    'lemon'
  ]
  const reel2 = [
    'lemon',
    'apple',
    'lemon',
    'lemon',
    'cherry',
    'apple',
    'banana',
    'lemon'
  ]
  const reel3 = [
    'lemon',
    'apple',
    'lemon',
    'apple',
    'cherry',
    'lemon',
    'banana',
    'lemon'
  ]

  return countBy([reel1[spot], reel2[spot], reel3[spot]])
}

function getPrize(quantities) {
  const prizes = {
    'cherry.3': 50,
    'cherry.2': 40,
    'apple.3': 20,
    'apple.2': 10,
    'banana.3': 15,
    'banana.2': 5,
    'lemon.3': 3
  }

  let points = 0

  each(quantities, (value, key) => {
    points += prizes[`${key}.${value}`] || 0
  })

  return points
}

function getResult(req) {
  const result = getTypeQuantities()
  const prize = getPrize(result)
  const currentCoins = req.query.currentCoins * 1 + prize - 1

  return { result, prize, currentCoins }
}

export const index = (req, res, next) => {
  validateRequest(req, res)

  res.json(getResult(req))
}
