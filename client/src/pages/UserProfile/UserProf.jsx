import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSidebar from './UserSidebar';
import './UserProf.css';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode correctly

const UserContent = () => {
    const [user, setUser] = useState();
    const accessToken = window.localStorage.getItem("accesToken");
    const decodedToken = jwtDecode(accessToken);
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/profile/${decodedToken.id}`);
            console.log(response.data);
            setUser(response.data); // Un-commented this line to set the user data

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        fetchUserData()
    }, []); // Added accessToken as a dependency to the useEffect hook

    

    // if (!user) {
    //     return <div>Loading...</div>; // Handle loading state
    // }

    return (
        <main className="user-content">
            <UserSidebar />
            <div className="user-info">
                {/* <div className="info-row"><span>Họ và tên:</span> {user.fullName}</div>
                <div className="info-row"><span>Giới tính:</span> {user.gender}</div>
                <div className="info-row"><span>Ngày sinh:</span> {user.dob}</div>
                <div className="info-row"><span>Địa chỉ:</span> {user.address}</div>
                <div className="info-row"><span>Email:</span> {user.email}</div>
                <div className="info-row"><span>SĐT:</span> {user.phoneNumber}</div> */}
            </div>
        </main>
    );
};

export default UserContent;
