import React, { useEffect, useState, useRef } from 'react'
import moviesApi from '../../../api/moviesApi'
import { TMDB_KEY, BASE_IMAGE_URL } from '../constants'
import { ToastContainer } from 'react-toastify'
import { showNotification } from '../../../helpers'
import List from './List'
import { useParams, useLocation } from 'react-router-dom'

function ListByGenre() {
    const [pageIndex, setPageIndex] = useState(1)
    const [listData, setListData] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const { type, id } = useParams()
    const location = useLocation()
    const { name } = location.state
    const idRef = useRef(id)

    useEffect(() => {
        setLoading(true)
        moviesApi
            .getListData(`discover/movie?api_key=${TMDB_KEY}&with_genres=${id}&language=vi-VN&page=${pageIndex}`)
            .then((resData) => {
                if (resData.status === 200 && resData.data.results) {
                    if (idRef.current !== id) {
                        idRef.current = id
                        setListData(resData.data.results)
                        setTotalPage(resData.data.total_pages)
                    } else {
                        if (listData.length > 0) {
                            let newListData = listData.concat(resData.data.results)
                            setListData(newListData)
                        } else {
                            setListData(resData.data.results)
                        }
                        setTotalPage(resData.data.total_pages)
                    }
                } else {
                    showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu.')
                }
            })
            .catch((error) => {
                showNotification('error', 'Xảy ra lỗi khi lấy dữ liệu.')
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {}
    }, [pageIndex, id])

    return (
        <div className="bg-[#374955] min-h-[calc(100vh-64px)] relative">
            <ToastContainer />
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold tracking-tight text-gray-200">Thể loại: {name}</h2>
                {isLoading && (
                    <span className="flex items-center text-gray-100 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <i className="bx bx-loader bx-spin mr-2"></i>
                        Đang tải dữ liệu...
                    </span>
                )}
                <List listData={listData} baseImageUrl={BASE_IMAGE_URL} />
                {pageIndex <= totalPage && (
                    <div className="flex justify-center mt-10">
                        <button
                            className="px-7 py-3 bg-[#40B2CD] rounded-full text-gray-100 flex items-center"
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            {isLoading && <i className="bx bx-loader mr-2"></i>}
                            Xem thêm
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListByGenre
