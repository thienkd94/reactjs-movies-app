import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    function (response) {
        return {
            status: response.status,
            data: response.data,
            // total: response.headers['x-total-count'] || 0,
        }
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosClient
