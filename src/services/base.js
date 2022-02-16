import axios from 'axios'

export function makeRequest () {
  return axios.create({
    baseURL: 'https://620c73c3b5736325938e7d4b.mockapi.io/'
  })
}
