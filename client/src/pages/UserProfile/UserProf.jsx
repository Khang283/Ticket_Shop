import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSidebar from './UserSidebar';
import './UserProf.css';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode correctly
import EditUserForm from '../../components/forms/User/EditUserForm/EditUserForm';
import { format } from 'date-fns';

const UserContent = () => {
    const [user, setUser] = useState(null); // Initialize user state as null
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const convertDateTimeToDate = (dateTime) => {
        return format(new Date(dateTime), 'dd-MM-yyyy');
      };
    useEffect(() => {
        const accessToken = window.localStorage.getItem("accesToken"); // Fixed typo "accesToken" to "accessToken"

        if (accessToken) {
            try {
                const decodedToken = jwtDecode(accessToken);
                fetchUserData(decodedToken.id);
            } catch (err) {
                console.error('Error decoding token:', err);
                setError('Invalid access token');
                setLoading(false);
            }
        } else {
            console.error('No access token found');
            setError('No access token found');
            setLoading(false);
        }
    }, []); // Empty dependency array to run only once on component mount

    const fetchUserData = async (customerId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/profile/${customerId}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Error fetching user data');
        } finally {
            setLoading(false); // Stop loading after data fetch
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Handle loading state
    }

    if (error) {
        return <div>{error}</div>; // Handle error state
    }

    const handleEditButtonClick = (user) => {
        setSelectedUser(user);
        setShowEditForm(true);
    };
    const handleCloseEditForm = () => {
        setShowEditForm(false);
        setSelectedUser(null);
        fetchUsers();
    };

    return (
        <main className="user-content">
            <UserSidebar />
            <div className="user-info">
                <h2 className='font-bold text-3xl uppercase text-center mb-4'>Thông tin người dùng</h2>
                <div className="info-row"><span>Họ và tên:</span> {user.fullName}</div>
                <div className="info-row"><span>Giới tính:</span> {user.gender === "male" ? "Nam" : "Nữ"}</div>
                <div className="info-row"><span>Ngày sinh:</span> {convertDateTimeToDate(user.dob)}</div>
                <div className="info-row"><span>Địa chỉ:</span> {user.address}</div>
                <div className="info-row"><span>Email:</span> {user.email}</div>
                <div className="info-row"><span>SĐT:</span> {user.phoneNumber}</div>
                <button 
                    className="text-white mt-4 hover:text-red-800 bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 border border-blue-600 rounded float-right"
                    onClick={() => handleEditButtonClick(user)}
                >
                    Sửa
                </button>
            </div>
            {showEditForm && <EditUserForm user={selectedUser} onClose={handleCloseEditForm} />}
        </main>
    );
};

export default UserContent;
