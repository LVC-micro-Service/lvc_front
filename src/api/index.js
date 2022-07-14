import axios from 'axios'

export const route = 'http://localhost:8080/crudService/'
export const casoROUTE = 'caso'
export const inserirROUTE = 'inserir'
export const tratamentoROUTE = 'tratamento'

export const api = axios.create({
    baseURL: route,
    timeout: 1000,
  });