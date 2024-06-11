import React, { useState } from "react";
import Background from '../../assets/nha_tho_duc_ba.jpg'
import './registerPageStyle.css'
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const navigate = useNavigate()

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)


    const [username, setUsername] = useState("")
    const [fullName, setFullName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const resetInputs = () => {
        setUsername("")
        setFullName("")
        setBirthday("")
        setGender("")
        setEmail("")
        setPhoneNumber("")
        setAddress("")
        setPassword("")
        setConfirmPassword("")
        document.getElementById("default-radio-1").checked = false
        document.getElementById("default-radio-2").checked = false
    }
    const usernameCheck = (username) => {
        const phoneRe = /^[A-Za-z0-9]{8,20}$/
        return phoneRe.test(username)
    }

    const telephoneCheck = (phoneNumber) => {
        const phoneRe = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/
        return phoneRe.test(phoneNumber)
    }
    const passwordCheck = (password) => {
        const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRe.test(password)
    }
    const emailCheck = (email) => {
        const emailRe = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        return emailRe.test(email)
    }
    const validatePassword = (password, confirmPassword) => {
        return (password === confirmPassword);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if ((errorUsername || errorEmail || errorPhoneNumber || errorPassword || errorConfirmPassword)) {
            console.log('error')
            return
        }
        console.log('send successfully!')
        const data = {
            username,
            fullName,
            birthday,
            gender,
            email,
            phoneNumber,
            address,
            password,
            confirmPassword
        }
        resetInputs()
        navigate('/login')

    }
    return (
        <div className="wrapperFormLogin"
            style={{
                backgroundImage: "url(" + Background + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Create account</h1>
                    <form class="overflow-y-auto max-h-96 min-w-96 innerFormLogin"
                        onSubmit={(event) => {
                            handleSubmit(event);
                        }}
                    >
                        <div class="mb-4">
                            <label for="username" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Username</label>
                            <input type="text" id="username" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your username" required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={() => {
                                    if (username) {
                                        setErrorUsername(!usernameCheck(username))
                                    }
                                }} />
                            {errorUsername &&
                                <div class="flex items-center bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3" role="alert">
                                    <svg class="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>Username should be 8-20 characters and shouldn't include any special character!.</p>
                                </div>
                            }
                        </div>
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full name</label>
                            <input type="text" id="name" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your full name" required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div class="mb-4">
                            <label for="birthday" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Birthday</label>
                            <input type="date" id="birthday" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)} />
                        </div>
                        <div class="mb-4">
                            <label for="gender" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                            <input id="default-radio-1" type="radio" value="male" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                                onChange={(e) => setGender(e.target.value)} />
                            <label for="default-radio-1" class="ml-3 ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Male</label>

                            <input id="default-radio-2" type="radio" value="female" name="gender" class="ml-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={(e) => setGender(e.target.value)} />
                            <label for="default-radio-2" class="ml-3 ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">FeMale</label>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="example@gmail.com" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => {
                                    if (email) {
                                        setErrorEmail(!emailCheck(email))
                                    }
                                }} />
                            {errorEmail &&
                                <div class="flex items-center bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3" role="alert">
                                    <svg class="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>This is not a email.</p>
                                </div>
                            }
                        </div>
                        <div class="mb-4">
                            <label for="phoneNumber" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Phone number</label>
                            <input type="tel" id="phoneNumber" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                onBlur={() => {
                                    if (phoneNumber) {
                                        setErrorPhoneNumber(!telephoneCheck(phoneNumber))
                                    }
                                }}
                                required />
                            {errorPhoneNumber &&
                                <div class="flex items-center bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3" role="alert">
                                    <svg class="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>This is not a phone number.</p>
                                </div>
                            }
                        </div>
                        <div class="mb-4">
                            <label for="address" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Address</label>
                            <input type="text" id="address" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your address" required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input type="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => {
                                    if (password) {
                                        setErrorPassword(!passwordCheck(password))
                                    }
                                    if (confirmPassword) {
                                        setErrorConfirmPassword(!validatePassword(password, confirmPassword))
                                    }
                                }}
                            />
                            {errorPassword &&
                                <div class="flex items-center bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3" role="alert">
                                    <svg class="fill-current w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters.</p>
                                </div>
                            }
                        </div>
                        <div class="mb-4">
                            <label for="confirmPassword" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                            <input type="password" id="confirmPassword" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password again" required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={() => {
                                    if (password) {
                                        setErrorConfirmPassword(!validatePassword(password, confirmPassword))
                                    }
                                }} />
                            {errorConfirmPassword &&
                                <div class="flex items-center bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3" role="alert">
                                    <svg class="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                    <p>Password do not match.</p>
                                </div>
                            }
                        </div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-amber-900 hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Register</button>

                        <div class="flex flex-col items-center mt-3">
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" class="font-bold text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >)
}
