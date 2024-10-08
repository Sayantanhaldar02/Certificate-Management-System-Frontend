import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../Reducers/userReducer/userReducer'

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Certificate',
        href: '/certificate',
    }
]

export function Navabr() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const userIsLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch()

    return (
        <div className="relative w-full shadow-md ">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">CMS</span>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-sm font-semibold  hover:text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    {
                        userIsLoggedIn ?
                            <button
                                type="button"
                                className="rounded-md  px-3 py-2 text-sm font-semibold border-2 border-primary-color shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 transition-all"
                                onClick={() => dispatch(userLogout())}
                            >
                                Logout
                            </button> :
                            <div className="flex gap-3">
                                <Link
                                    to="/register"
                                    type="button"
                                    className="rounded-md  px-3 py-2 text-sm font-semibold border-2 border-primary-color shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 transition-all"
                                >
                                    Sign up
                                </Link>
                                <Link
                                    to="/login"
                                    type="button"
                                    className="rounded-md bg-primary-color px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Sign in
                                </Link>
                            </div>
                    }

                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span className="font-bold">CMS</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                {
                                    userIsLoggedIn ?
                                        <button
                                            type="button"
                                            className="rounded-md  px-3 py-2 text-sm font-semibold border-2 border-primary-color shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 transition-all"
                                            onClick={() => dispatch(userLogout())}
                                        >
                                            Logout
                                        </button> :
                                        <div className="flex flex-col mt-5 gap-3">
                                            <Link
                                                to="/register"
                                                type="button"
                                                className="rounded-md  text-center px-3 py-2 text-sm font-semibold border-2 border-primary-color shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 transition-all"
                                            >
                                                Sign up
                                            </Link>
                                            <Link
                                                to="/login"
                                                type="button"
                                                className="rounded-md text-center bg-primary-color px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                Sign in
                                            </Link>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}