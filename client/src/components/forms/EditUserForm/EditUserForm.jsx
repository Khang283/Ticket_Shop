import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, onClose }) => {
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.fullName);
  const [gender, setGender] = useState(user.gender);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  useEffect(() => {
    setUserName(user.username);
    setEmail(user.email);
    setFullName(user.fullName);
    setGender(user.gender);
    setAddress(user.address);
    setPhoneNumber(user.phoneNumber);
  }, [user]);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60'>
        <div className='bg-white rounded-lg shadow-lg w-full max-w-md text-left'>
            <h1 className='text-center'>Cập nhật người dùng</h1>
            <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4'>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="userName">Tên đăng nhập</label>
                <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Tên đăng nhập" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="email">Email</label>
                <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="fullName">Họ tên</label>
                <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Họ tên" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4">Giới tính</label>
                <div className="w-2/3 flex items-center">
                <label className="mr-4">
                    <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={(e) => setGender(e.target.value)} /> Nam
                </label>
                <label>
                    <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={(e) => setGender(e.target.value)} /> Nữ
                </label>
                </div>
            </div>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="phoneNumber">Số điện thoại</label>
                <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Số điện thoại" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="address">Địa chỉ</label>
                <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Địa chỉ" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
                    Hủy
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Cập nhật
                </button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default EditUserForm;
