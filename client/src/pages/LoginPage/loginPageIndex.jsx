import React, { useState } from "react";
import Background from '../../assets/nha_tho_duc_ba.jpg'
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authAPI";

export default function LoginPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "username": username,
            "password": password
        };
        try {
            const resp = await authApi.login(data);
            console.log(resp);
            if (resp.status === 200) {
                window.localStorage.setItem("accesToken", resp.data.accesToken);
                window.localStorage.setItem("refreshToken", resp.data.refreshToken);
                window.localStorage.setItem("role", resp.data.role);
                if (resp.data.role === 'user') {
                    navigate('/home');
                } else if (resp.data.role === 'admin') {
                    navigate('/user');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wrapperFormLogin"
            style={{
                backgroundImage: "url(" + Background + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                            <input type="text" id="username" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your username" required
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required
                                onChange={(e) => setPassword(e.target.value)} />
                            <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 accent-green-300 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>
                            <Link to="/register" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</Link>
                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-900 hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in to account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
