import React from 'react';
import './UserSidebar.css';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import authApi from '../../api/authAPI';

const UserSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await authApi.logout();
            // Xóa token và thông tin đăng nhập từ localStorage
            window.localStorage.removeItem('accesToken');
            window.localStorage.removeItem('refreshToken');
            window.localStorage.removeItem('role');
            navigate('/login'); // Điều hướng người dùng đến trang đăng nhập
        } catch (error) {
            console.error('Error during logout:', error);
            // Hiển thị thông báo lỗi nếu cần
        }
    };

    return (
        <aside className="user-sidebar">
            <div className="profile">
                <img src="/profile_picture.jpg" alt="Profile Picture" className="profile-picture" />
                <button className="edit-profile-btn">Chỉnh sửa trang cá nhân</button>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <button onClick={() => navigate('/profile')}>
                        <AccountCircleIcon className="sidebar-icon" />
                        Thông tin cá nhân
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/user/booking-info')}>
                        <LocalActivityIcon className="sidebar-icon" />
                        Thông tin đặt vé
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/user-settings')}>
                        <SettingsIcon className="sidebar-icon" />
                        Cài đặt
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/user/support')}>
                        <HelpIcon className="sidebar-icon" />
                        Trợ giúp và hỗ trợ
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/user/contact')}>
                        <ContactPageIcon className="sidebar-icon" />
                        Liên hệ với chúng tôi
                    </button>
                </li>
                <li>
                    <button onClick={handleLogout}>
                        <ExitToAppIcon className="sidebar-icon" />
                        Đăng xuất
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default UserSidebar;
