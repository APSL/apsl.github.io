export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function parseJSON(response) {
  return response.json()
}

export function buildQueryString(params) {
  let qs = ''
  Object.keys(params).forEach(key => qs += `${key}=${params[key]}&`)
  return qs.slice(0, -1)
}
