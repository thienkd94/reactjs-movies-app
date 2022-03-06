import React from 'react'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'

function Item(props) {
    const { item, baseImageUrl } = props
    return (
        <Link to={`/${item.media_type}/${item.id}`}>
            <div className="w-full h-[410px] flex flex-col justify-between bg-[#637583] dark:border-gray-700 rounded-lg mb-6 group overflow-hidden hover:bg-[#ECFCFF] relative">
                <div className="w-full h-72">
                    <img
                        className="w-full h-full z-0 object-cover"
                        src={`${baseImageUrl}${item.poster_path}`}
                        alt="aaaa"
                    />
                    <div className="-mt-3.5 flex justify-between px-3">
                        <span className="p-1 w-16 bg-[#40B2CD] rounded-full text-xs text-white flex justify-center items-center">
                            {item.media_type === 'tv' ? 'TV Series' : 'Phim'}
                        </span>
                        <span className="w-9 h-9 rounded-full text-xs bg-[#FFE850] text-[#2F4858] flex items-center justify-center font-bold">
                            {item.vote_average}
                        </span>
                    </div>
                </div>

                <div className="p-3 h-[75px] -translate-y-4">
                    <h4 className="text-gray-200 font-semibold text-center group-hover:text-gray-600 h-full">
                        {item.title || item.name}
                    </h4>
                    <p className="text-sm text-center text-gray-200 group-hover:text-gray-600">
                        Ngày khởi chiếu: {dateformat(item.release_date, 'dd/mm/yyyy')}
                    </p>
                </div>
                {/* <div className="p-3">
                    <p className="text-sm text-center text-gray-200 group-hover:text-gray-600">
                        Ngày khới chiếu: {dateformat(item.release_date, 'dd/mm/yyyy')}
                    </p>
                </div> */}
            </div>
        </Link>
    )
}

export default Item
