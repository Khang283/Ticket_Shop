import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserSettings.css';

import UserSidebar from './UserSidebar';

const UserSettings = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        fullName: '',
        dob: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/1'); // Sử dụng ID user thực tế
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/user/1`, userInfo); // Sử dụng ID user thực tế
            alert('Cập nhật thành công');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleChangePassword = () => {
        // Xử lý logic đổi mật khẩu
    };

    return (
        <main className='setting-content'>
            <UserSidebar/>
        <div className="user-settings">
            <h2>Cài đặt thông tin cá nhân</h2>
            <div className="form-row">
                <label>Tên đăng nhập</label>
                <input
                    type="text"
                    name="username"
                    value={userInfo.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Họ và tên</label>
                <input
                    type="text"
                    name="fullName"
                    value={userInfo.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Ngày sinh</label>
                <input
                    type="date"
                    name="dob"
                    value={userInfo.dob}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Số điện thoại</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Địa chỉ</label>
                <input
                    type="text"
                    name="address"
                    value={userInfo.address}
                    onChange={handleChange}
                />
            </div>
            <button className="upd-btn" onClick={handleUpdate}>Cập nhật</button>
            <button className="CPW-btn" onClick={handleChangePassword}>Đổi mật khẩu</button>

        </div>
        </main>
    );
};

export default UserSettings;
