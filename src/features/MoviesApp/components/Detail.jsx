import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import moviesApi from '../../../api/moviesApi'
import { TMDB_KEY } from '../constants'
import { showNotification } from '../../../helpers'
import { ToastContainer } from 'react-toastify'
import { BASE_IMAGE_URL } from '../constants'

function Detail() {
    const { id, type } = useParams()
    console.log('useParams', useParams())
    const [movie, setMovie] = useState({})
    const [videos, setVideos] = useState({})
    const [isError, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            Promise.all([getDetailData(), getVideoData()])
        }
    }, [])

    const getDetailData = () => {
        moviesApi
            .getDetail(`${type}/${id}?api_key=${TMDB_KEY}&language=vi-VN`)
            .then((resData) => {
                if (resData.status === 200 && resData.data) {
                    setMovie(resData.data)
                } else {
                    showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu phim.')
                }
            })
            .catch((error) => {
                setError(true)
                showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu phim.')
            })
    }

    const getVideoData = () => {
        moviesApi
            .getDetail(`${type}/${id}/videos?api_key=${TMDB_KEY}`)
            .then((resData) => {
                if (resData.status === 200 && resData.data && resData.data.results) {
                    setVideos(resData.data.results)
                } else {
                    showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu video.')
                }
            })
            .catch((error) => {
                setError(true)
                showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu video.')
            })
    }

    let genres
    if (movie && movie.genres && movie.genres.length > 0) {
        genres = movie.genres.map((genre) => {
            return genre.name
        })
    }

    let videoTrailer
    if (videos.length > 0) {
        videoTrailer = videos.find(
            (video) => video.site.toLowerCase() === 'youtube' && video.type.toLowerCase() === 'trailer'
        )
    }

    return (
        <>
            <ToastContainer />
            {isError && (
                <div className="h-screen max-w-5xl mx-auto text-center py-32">
                    <h1 className="text-4xl font-semibold mb-4">Không tải được dữ liệu</h1>
                    <p className="text-gray-700 mb-10">Xảy ra lỗi khi tải dữ liệu phim</p>
                    <button
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 tracking-wider uppercase text-sm rounded-lg"
                        onClick={() => navigate(-1)}
                    >
                        &larr; Quay lại
                    </button>
                </div>
            )}
            {!isError && (
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt={movie.title}
                                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">Tên phim</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {movie.title || movie.name}{' '}
                                    {movie.title !== movie.original_title ? `(${movie.original_title})` : ''}
                                </h1>
                                <p className="leading-relaxed mt-5">
                                    {' '}
                                    <span className="font-semibold">Giới thiệu</span>:{' '}
                                    {movie.overview ? (
                                        movie.overview
                                    ) : (
                                        <span className="text-green-400">Đang cập nhật</span>
                                    )}
                                </p>
                                <p className="mt-2">
                                    <span className="font-semibold">Trạng thái</span>:{' '}
                                    {movie.status === 'Released' ? 'Đã khởi chiếu' : 'Chuẩn bị khởi chiếu'}
                                </p>
                                <p className="mt-2">
                                    <span className="font-semibold">Thời gian</span>: {movie.runtime} phút
                                </p>
                                <p className="mt-2">
                                    <span className="font-semibold">Thể loại</span>:{' '}
                                    {genres && genres.length > 0 && genres.join(', ')}
                                </p>
                                <p className="mt-2">
                                    <span className="font-semibold">Lượt đánh giá</span>: {movie.vote_count}
                                    {' | '}
                                    <span className="font-semibold">Điểm trung bình</span>: {movie.vote_average}
                                </p>
                                {movie.homepage && (
                                    <p className="mt-2">
                                        <span className="font-semibold">Website</span>:{' '}
                                        <a
                                            href={movie.homepage}
                                            target="_blank"
                                            className="underline hover:text-blue-500"
                                        >
                                            Click để tới trang chủ
                                        </a>
                                    </p>
                                )}
                                {videoTrailer && videoTrailer.key && (
                                    <div className="mt-10">
                                        <a
                                            href={`https://www.youtube.com/watch?v=${videoTrailer.key}`}
                                            className="border px-10 py-3 flex justify-center items-center rounded-full hover:bg-[#374955] hover:text-gray-200 transition-all"
                                            target="_blank"
                                        >
                                            {videoTrailer.name}{' '}
                                            <i className="bx bx-right-arrow-alt bx-sm bx-fade-right"></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 mx-auto">
                                <button
                                    className="px-10 py-3 rounded-lg hover:border-0 bg-[#233541] text-gray-300 hover:bg-[#3d5b6e]"
                                    onClick={() => navigate(-1)}
                                >
                                    Quay lại
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Detail
