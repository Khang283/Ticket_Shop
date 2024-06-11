import React, { useState, useEffect } from 'react';
import './User.css';
import AddUserForm from '../../components/forms/AddUserForm/AddUserForm';
import EditUserForm from '../../components/forms/EditUserForm/EditUserForm';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';

const Receipts = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users'); // Thực hiện gọi API đến endpoint /users
      const userData = response.data;

      // Kiểm tra xem dữ liệu trả về có phải là một mảng không
      if (Array.isArray(userData)) {
        setUsers(userData);
        console.log(users);
      } else {
        console.error('Fetched data is not an array:', userData);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  const handleEditButtonClick = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedUser(null);
  };

  return (
    <div className='' id='user'>
      <div>
        <h1 className='text-center'>QUẢN LÝ NGƯỜI DÙNG</h1>
      </div>
      <div className='flex justify-between mt-2 mb-2'>
        <h2>Danh sách người dùng</h2>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleAddButtonClick}>Thêm</button>
      </div>
      <div>
        <table className='w-full bg-white border-collapse border border-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>STT</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Tài khoản</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Họ tên</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Email</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Giới tính</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Số điện thoại</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Địa chỉ</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Vai trò</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Sửa</th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Xóa</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{index + 1}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{user.username}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{user.fullName}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{user.email}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>
                  {user.gender === "male" ? 'Nam' : 'Nữ'}
                </td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{user.phoneNumber}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{user.address}</td>
                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>
                  {user.role === "user" ? 'Người dùng' : 'Admin'}
                </td>
                <td className='border-r border-200'>
                  <button className="w-full flex justify-center items-center text-blue-600 hover:text-blue-800" onClick={() => handleEditButtonClick(user)}>
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button className="w-full flex justify-center items-center text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddForm && <AddUserForm onClose={handleCloseAddForm} />}
      {showEditForm && <EditUserForm user={selectedUser} onClose={handleCloseEditForm} />}
    </div>
  );
}

export default Receipts;
