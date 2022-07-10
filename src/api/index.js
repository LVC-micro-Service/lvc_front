import axios from 'axios'

export const route = 'http://192.168.1.102:8080/crudService/'
export const caso = 'caso'
export const inserir = 'inserir'

export const api = axios.create({
    baseURL: route,
    timeout: 1000,
  });