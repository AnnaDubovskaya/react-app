export const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response.statusText)
  }
}

export const json = response => {
  return response.json()
}

export const text = response => {
  return response.text()
}
