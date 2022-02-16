export function makeClone (value = {}) {
  return JSON.parse(JSON.stringify(value))
}

export function handleErrorResponse (response = {}) {
  return JSON.parse(JSON.stringify(response))
}
