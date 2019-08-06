import axios from 'axios'
import handlerError from './handle-HTTP-errors'

axios.interceptors.response.use(
  response => response,
  error => {
    alert(handlerError(error))

    return Promise.reject(error)
  }
)

export default axios
