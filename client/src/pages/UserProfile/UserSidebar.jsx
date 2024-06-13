import React from 'react';
import './UserSidebar.css';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const UserSidebar = () => {
    const navigate = useNavigate();

    return (
        <aside className="user-sidebar">
            <div className="profile">
                <img src="/profile_picture.jpg" alt="Profile Picture" className="profile-picture" />
                <button className="edit-profile-btn">Chỉnh sửa trang cá nhân</button>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <button onClick={() => navigate('/user')}>
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
                    <button onClick={() => navigate('/user/logout')}>
                        <ExitToAppIcon className="sidebar-icon" />
                        Đăng xuất
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default UserSidebar;
