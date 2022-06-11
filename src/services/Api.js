import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://api.estudos.oasysdigital.com.br',
  timeout: 10000,
  headers: { Accept: '*/*' }
})
