import React, { useState } from 'react';
import axios from 'axios';

const DeleteTicketForm = ({ ticket, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/api/v1/tickets/${ticket.id}`);
      alert('Vé đã được xóa thành công');
      onClose();
    } catch (error) {
      console.error('Lỗi khi xóa vé:', error);
      alert('Có lỗi xảy ra khi xóa vé');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md text-left mb-4'>
        <h1 className='text-center text-xl font-bold mt-8 mb-4'>Xác nhận xóa vé</h1>
        <form className='px-8 pt-6 pb-8 mb-4'>
          <p className='mb-4 text-center text-gray-700'>Bạn có chắc chắn muốn xóa vé không?</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
              disabled={loading}
            >
              Hủy
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? 'Đang xóa...' : 'Xóa'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteTicketForm;
