import React from 'react';
import axios from 'axios';

const DeleteUserForm = ({ user, onClose }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/users/${user.id}`);
      alert('Người dùng đã được xóa thành công');
      onClose();
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error);
      alert('Có lỗi xảy ra khi xóa người dùng');
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md text-left'>
        <h1 className='text-center'>Xác nhận xóa người dùng</h1>
        <form className='px-8 pt-6 pb-8 mb-4'>
          <p className='mb-4 text-center'>Bạn có chắc chắn muốn xóa người dùng <strong>{user.username}</strong> không?</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Hủy
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleDelete}
            >
              Xóa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteUserForm;
