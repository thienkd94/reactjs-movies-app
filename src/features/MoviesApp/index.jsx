import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import routes from '../../routes'
import moviesApi from '../../api/moviesApi'
import { TMDB_KEY } from './constants'
import { showNotification } from '../../helpers'
import { ToastContainer } from 'react-toastify'

function MoviesApp() {
    const navigate = useNavigate()
    const [genres, setGenres] = useState([])

    useEffect(() => {
        navigate('trending', { replace: true })

        moviesApi
            .getGenres(`list?api_key=${TMDB_KEY}&language=vi-VN`)
            .then((resData) => {
                if (resData.status === 200 && resData.data && resData.data.genres) {
                    setGenres(resData.data.genres)
                } else {
                    showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu thể loại phim.')
                }
            })
            .catch((error) => {
                showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu thể loại phim.')
            })
    }, [])

    return (
        <div>
            <ToastContainer />
            <Navbar genres={genres} />
            <Routes>
                {routes.map((route) => {
                    return <Route key={route.path} path={route.path} element={route.element} />
                })}
            </Routes>
        </div>
    )
}

export default MoviesApp
