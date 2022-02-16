import axios from 'axios'
import { HOST_API } from '@/configs/constant'

export function makeRequest () {
  return axios.create({
    baseURL: HOST_API
  })
}
