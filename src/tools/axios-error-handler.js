import createError from 'http-errors'

module.exports = (error, req, res, next) =>
  next(createError(error.status || error.response.status))
