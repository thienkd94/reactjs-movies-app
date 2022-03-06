import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import routes from '../routes'

function Navbar({ genres }) {
    const { pathname } = useLocation()
    const [isShowMenuMobile, setShowMenuMobile] = useState(false)
    const [isShowDropdownMenu, setShowDropdownMenu] = useState(false)
    const dropdownRef = useRef()

    useEffect(() => {
        const handleClickedOutSide = (e) => {
            if (isShowDropdownMenu && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdownMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickedOutSide)

        return () => {
            document.removeEventListener('mousedown', handleClickedOutSide)
        }
    }, [isShowDropdownMenu])

    return (
        <div className="fixed z-50 w-full bg-[#233541] border-b-2 border-gray-500">
            <div className="antialiased">
                <div className="w-full text-gray-700">
                    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <Link
                                to="/trending"
                                className="text-2xl font-extrabold tracking-widest text-gray-200 uppercase rounded-lg focus:outline-none focus:shadow-outline"
                                onClick={() => setShowMenuMobile(false)}
                            >
                                Movie App
                            </Link>
                            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                                <span onClick={() => setShowMenuMobile((isShowMenuMobile) => !isShowMenuMobile)}>
                                    {isShowMenuMobile && <i className="bx bx-x bx-sm text-gray-200"></i>}
                                    {!isShowMenuMobile && <i className="bx bx-menu bx-sm text-gray-200"></i>}
                                </span>
                            </button>
                        </div>
                        <nav
                            className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
                                !isShowMenuMobile ? 'hidden' : 'visible'
                            }`}
                        >
                            {routes.map((route) => {
                                if (route.text) {
                                    return (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className={`block px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline ${
                                                pathname.substring(1) === route.path ? 'bg-gray-200 !text-gray-900' : ''
                                            }`}
                                            onClick={() => setShowMenuMobile(false)}
                                        >
                                            {route.text}
                                        </Link>
                                    )
                                }
                            })}
                            {genres && (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        className={`flex flex-row text-gray-200 items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left rounded-lg  md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline ${
                                            isShowDropdownMenu
                                                ? 'bg-gray-200 !text-gray-900'
                                                : 'bg-transparent text-gray-200'
                                        }`}
                                        onClick={() => setShowDropdownMenu((isShowDropdownMenu) => !isShowDropdownMenu)}
                                    >
                                        <span>Thể loại</span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                                                isShowDropdownMenu && '-rotate-180'
                                            }`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {isShowDropdownMenu && (
                                        <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right h-96 sm:h-auto">
                                            <div className="px-2 pt-2 pb-4 bg-[#435a69] text-gray-200 rounded-md shadow-lg dark-mode:bg-gray-700 h-full overflow-auto">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {genres.map((genre) => {
                                                        return (
                                                            <Link
                                                                key={genre.id}
                                                                to={`movie/genre/${genre.id}`}
                                                                state={{ name: genre.name }}
                                                                className="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                                onClick={() => {
                                                                    setShowDropdownMenu(
                                                                        (isShowDropdownMenu) => !isShowDropdownMenu
                                                                    )
                                                                    setShowMenuMobile(false)
                                                                }}
                                                            >
                                                                <div className="ml-3">
                                                                    <p className="font-semibold">{genre.name}</p>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
