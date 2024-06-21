import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSidebar from './UserSidebar';
import './UserProf.css'; 

const UserContent = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('accesToken');
                const response = await axios.get('http://localhost:3000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <main className="user-content">
            <UserSidebar />
            <div className="user-info">
                <div className="info-row"><span>Họ và tên:</span> {userInfo.name}</div>
                <div className="info-row"><span>Giới tính:</span> {userInfo.gender}</div>
                <div className="info-row"><span>Ngày sinh:</span> {userInfo.dob}</div>
                <div className="info-row"><span>Địa chỉ:</span> {userInfo.address}</div>
                <div className="info-row"><span>Email:</span> {userInfo.email}</div>
                <div className="info-row"><span>SĐT:</span> {userInfo.phone}</div>
            </div>
        </main>
    );
};

export default UserContent;
