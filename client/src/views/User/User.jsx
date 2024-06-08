import React from 'react';
import './User.css';



const User = () => {
        return (
            <div className='user'>
                <div>
                    <h1>QUẢN LÝ NGƯỜI DÙNG</h1>
                </div>
                <div className='flex justify-between mt-2 mb-2'>
                    <h2>Danh sách người dùng</h2>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Thêm</button>
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
                            <tr>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>nahn@123</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Nguyễn Lê Trọng Nhân</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>nahn123@gmail.com</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Nam</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>0123879456</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Ngãi An - Cát Khánh - Phù Cát - Bình Định</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người dùng</td>
                                <td className='border-r border-200'></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>nahn@123</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Nguyễn Lê Trọng Nhân</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>nahn123@gmail.com</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Nam</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>0123879456</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Ngãi An - Cát Khánh - Phù Cát - Bình Định</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người dùng</td>
                                <td className='border-r border-200'></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
}

export default User;