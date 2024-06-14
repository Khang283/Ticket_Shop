import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; import authApi from "../../api/authAPI";

let navigation = [
    { name: 'Home', to: '/login', current: true },
    { name: 'About', to: '/register', current: false },
    { name: 'Booking', to: '/booking-preview', current: false },
    { name: 'Contact', to: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem('accesToken');
        setIsLogin(Boolean(token))
    }, [])

    const Logout = async () => {
        try {
            const data = {
                "refreshToken": window.localStorage.getItem("refreshToken")
            }
            console.log(data);
            const resp = await authApi.logout(data);
            console.log(resp);
            if (resp.status === 200) {
                window.localStorage.removeItem("accesToken");
                window.localStorage.removeItem("refreshToken");
                window.localStorage.removeItem("role");
                setIsLogin(false)
                navigate('/home')
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }

    const refreshCurrentPage = (item) => {
        navigation = navigation.map(navItem => ({
            ...navItem,
            current: navItem === item
        }));
    };
    return (
        <>
            <header>
                <Disclosure as="nav" className="bg-amber-900">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <img
                                        className="h-16 w-auto"
                                        src={Logo}
                                        alt="Your Company"
                                    />
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                        className={classNames(
                                                            item.current ? 'bg-amber-950 text-white' : 'text-gray-300 hover:bg-amber-800 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                        onClick={() => {
                                                            refreshCurrentPage(item);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {!isLogin && (
                                            <>
                                                <Link to="/login" className="bg-amber-950 text-white rounded-md px-3 py-2 text-sm font-medium">Log In</Link>
                                                <Link to="/user" className="bg-amber-800 text-white rounded-md px-3 py-2 text-sm font-medium ml-2 flex items-center">
                                                    <AccountCircleIcon className="mr-1" /> User
                                                </Link>
                                            </>
                                        )}
                                        {isLogin && <Menu as="div" className="relative ml-3">
                                            <div>
                                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </MenuButton>
                                            </div>
                                            <Transition
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <MenuItem>
                                                        {({ focus }) => (
                                                            <Link
                                                                to="/profile"
                                                                className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </Link>
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem>
                                                        {({ focus }) => (
                                                            <Link
                                                                to="/setting"
                                                                className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </Link>
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem>
                                                        {({ focus }) => (
                                                            <button
                                                                onClick={() => {
                                                                    Logout();
                                                                }}

                                                                className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-48 text-left')}
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </MenuItem>
                                                </MenuItems>
                                            </Transition>
                                        </Menu>}
                                    </div>
                                </div>
                            </div>

                            <DisclosurePanel className="sm:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <DisclosureButton
                                            key={item.name}
                                            as="a"
                                            to={item.to}
                                            className={classNames(
                                                item.current ? 'bg-amber-950 text-white' : 'text-gray-300 hover:bg-amber-800 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                            onClick={() => {
                                                refreshCurrentPage(item);
                                            }}
                                        >
                                            {item.name}
                                        </DisclosureButton>
                                    ))}
                                </div>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </header>
        </>
    );
}
