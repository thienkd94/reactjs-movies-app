import axiosClient from './axiosClient'

class MoviesApi {
    getListData = (params) => {
        return axiosClient.get(params)
    }

    getDetail = (params) => {
        return axiosClient.get(params)
    }

    getGenres = (params) => {
        const url = 'genre/movie/' + params
        return axiosClient.get(url)
    }
}

const moviesApi = new MoviesApi()
export default moviesApi
