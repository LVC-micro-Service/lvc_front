import axios from 'axios'

export const route = 'http://localhost:8080/crudService/'
export const caso = 'caso'
export const inserir = 'inserir'

export const api = axios.create({
    baseURL: route,
    timeout: 1000,
  });