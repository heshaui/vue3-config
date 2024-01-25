import axios from 'axios'
import apiConfig from './apiConfig'
const api = axios.create({
    baseURL: '/obc',
    timeout: 1000 * 60 * 10,
    responseType: 'json'
})

export default apiConfig(api)