import service from './axios'
import { LOGIN, USER } from '@/interface/login'

export const logup = (data: LOGIN) => service({
  url: '/api/logup',
  method: 'post',
  data
})

export const login = (data: LOGIN) => service({
  url: '/api/login',
  method: 'post',
  data
})

export const user = (data: USER) => service({
  url: '/api/user',
  method: 'get',
  params: data
})
