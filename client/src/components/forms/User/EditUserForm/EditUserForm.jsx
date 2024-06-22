import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, onClose }) => {
    const [userName, setUserName] = useState(user.username);
    const [id, setId] = useState(user.id);
    const [email, setEmail] = useState(user.email);
    const [fullName, setFullName] = useState(user.fullName);
    const [gender, setGender] = useState(user.gender);
    const [address, setAddress] = useState(user.address);
    const [role, setRole] = useState(user.role);
    
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = {
                id,
                username: userName,
                email,
                fullName,
                gender,
                phoneNumber,
                address
            };
            const response = await axios.put('http://localhost:3000/api/v1/users', user);
            alert('Cập nhật thành công');
            onClose();
        } catch (error) {
            console.log('Lỗi cập nhật!', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        setId(user.id);
        setUserName(user.username);
        setEmail(user.email);
        setFullName(user.fullName);
        setGender(user.gender);
        setAddress(user.address);
        setPhoneNumber(user.phoneNumber);
        setRole(user.role);
    }, [user]);

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60'>
            <div className='bg-white rounded-lg shadow-lg w-full max-w-md text-left'>
                <h1 className='text-center'>Cập nhật người dùng</h1>
                <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4'>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="userName">Tên đăng nhập</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="email">Email</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="fullName">Họ tên</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4">Giới tính</label>
                        <div className="w-2/3 flex items-center">
                            <label className="mr-4">
                                <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} /> Nam
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} /> Nữ
                            </label>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="phoneNumber">Số điện thoại</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="address">Địa chỉ</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label className='w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4' htmlFor='role'>Vai trò</label>
                        <input className='w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight'
                            type='text' id='role' value={role === "user" ? 'Người dùng' : 'Admin'} readOnly />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
                            Hủy
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserForm;
