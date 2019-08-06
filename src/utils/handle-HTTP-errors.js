export default jqXHR => {
  switch (jqXHR.status) {
    case 400:
      return 'The server cannot or will not process the request due to an apparent client error.'

    case 401:
      return 'You have lost the session, please log in to continue.'

    case 403:
      return 'The user might not have the necessary permissions for a resource.'

    case 404:
      return 'Resource searched does not exist or is not found.'

    case 405:
      return 'A request method is not supported for the requested resource.'

    case 422:
      return 'The request was well-formed but was unable to be followed due to semantic errors.'

    case 429:
      return 'The user has sent too many requests in 60 seconds.'

    default:
      return 'An unexpected condition was encountered.'
  }
}
