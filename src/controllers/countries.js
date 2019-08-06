import axios from 'axios'
import { filter, intersectionWith } from 'lodash'
import { validateRequest, axiosError } from '../tools'

export const index = (req, res, next) => {
  validateRequest(req, res)

  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(({ data }) => {
      req.query.names.forEach((name, index) => {
        req.query.names[index] = name.toLowerCase()
      })

      data.forEach((country, index) => {
        data[index].nameLowerCase = country.name.toLowerCase()
      })

      res.json(
        filter(
          data,
          country =>
            !!intersectionWith(req.query.names, [country], (name, country) =>
              country.nameLowerCase.includes(name)
            ).length
        )
      )
    })
    .catch(error => axiosError(error, req, res, next))
}

export const show = (req, res, next) => {
  axios
    .get(`https://restcountries.eu/rest/v2/name/${req.params.name}`)
    .then(({ data }) => res.json(data[0]))
    .catch(error => axiosError(error, req, res, next))
}
