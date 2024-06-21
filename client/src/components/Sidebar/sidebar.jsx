import React from "react";
import Logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authAPI";
export default function Sidebar() {
    const navigate = useNavigate()
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

                navigate('/home')
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>


            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-amber-900 text-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <img src={Logo} alt="" />
                        </li>
                        <li>
                            <Link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ms-3 text-white  group-hover:text-gray-900">Thông Kê</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-users" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap text-white  group-hover:text-gray-900">Quản lý người dùng</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-receipts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 2H8c-1.1 0-2 .9-2 2v16.4c0 .4.2.7.5.9.3.2.7.2 1.1 0l2.9-1.4 2.9 1.4c.3.1.7.1 1 0l2.9-1.4 2.9 1.4c.1.1.3.1.5.1s.3 0 .4-.1c.3-.2.5-.5.5-.9V4c0-1.1-.9-2-2-2zM8 20.5v-16c0-.3.2-.5.5-.5H19c.3 0 .5.2.5.5v16L17 19l-3 1.5L11 19l-3 1.5zM9 7h8v2H9V7zm0 4h8v2H9v-2zm0 4h5v2H9v-2z"/>
                            </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap text-white  group-hover:text-gray-900">Quản lý hóa đơn</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-tickets" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 4h-5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H2a1 1 0 0 0-1 1v3.5c0 .6.4 1.2 1 1.4v4.2c-.6.2-1 .8-1 1.4V19a1 1 0 0 0 1 1h5v1c0 .6.4 1 1 1h8a1 1 0 0 0 1-1v-1h5a1 1 0 0 0 1-1v-3.5c0-.6-.4-1.2-1-1.4V10.9c.6-.2 1-.8 1-1.4V5a1 1 0 0 0-1-1zM16 19H8v-2h8v2zm5-4h-1v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H9v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2H3V6h1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6h6v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6h1v9z"/>
                            </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap text-white  group-hover:text-gray-900">Quản lý vé</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-tickettypes" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.384 3.077c.024-.18.03-.34.03-.51C21.414 1.152 20.26 0 18.886 0h-13.77C4.753 0 3.6 1.152 3.6 2.567c0 .17.006.33.03.51a4.563 4.563 0 0 1 0 9.078 4.563 4.563 0 0 1 0 9.078c-.024.18-.03.34-.03.51C3.6 22.848 4.753 24 6.115 24h13.77c1.364 0 2.518-1.152 2.518-2.567 0-.17-.006-.33-.03-.51a4.563 4.563 0 0 1 0-9.078 4.563 4.563 0 0 1 0-9.078zm-1.272 14.137a5.753 5.753 0 0 0 0 3.572 1.286 1.286 0 0 1 1.029 1.262c0 .71-.571 1.281-1.271 1.281h-13.77c-.7 0-1.271-.571-1.271-1.281a1.286 1.286 0 0 1 1.029-1.262 5.753 5.753 0 0 0 0-3.572 1.286 1.286 0 0 1-1.029-1.262c0-.71.571-1.281 1.271-1.281h13.77c.7 0 1.271.571 1.271 1.281a1.286 1.286 0 0 1-1.029 1.262zM17.5 7.75h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 4.5h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm0 4.5h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5z"/>
                            </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap text-white  group-hover:text-gray-900">Quản lý loại vé</span>
                            </Link>
                        </li> 
                    </ul>
                    <div class="mt-80">
                        <hr class="border-white " />
                        <Link onClick={() => Logout()} to="#" class=" font-medium flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap text-white  group-hover:text-gray-900">Đăng Xuất</span>
                        </Link>
                        <hr class="border-white " />
                    </div>
                </div>
            </aside>
        </>
    )
}
