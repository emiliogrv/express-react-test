import createError from 'http-errors'
import cors from 'cors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index'
import countriesRouter from './routes/countries'
import slotMachineRouter from './routes/slot-machine'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/v1/countries', countriesRouter)
app.use('/api/v1/slot-machine', slotMachineRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
