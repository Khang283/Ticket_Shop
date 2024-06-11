import axios from 'axios';
import React, { useState } from 'react';

const AddUserForm = ({ onClose }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const genderValue = gender === "Nam" ? "male" : "female";
      const newUser = {
        username,
        password,
        email,
        fullName,
        gender: genderValue,
        role: 'user',
        address,
        phoneNumber
      };
      const response = await axios.post('http://localhost:3000/api/v1/users', newUser);
      alert("Thêm thành công!");
      onClose();
    } catch (error) {
      console.error('Error adding user:', error.response?.data || error.message);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md text-left'>
        <h1 className='text-center'>Thêm người dùng</h1>
        <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4'>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="username">Tên đăng nhập</label>
            <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Ex: Nahn2002" required/>
          </div>
          <div className='mb-4 flex items-center'>
            <label className='w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4' htmlFor='password'>Mật khẩu</label>
            <input className='w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Ex: Nhan#134.' required/>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="email">Email</label>
            <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex: nahnhandsome2002@gmail.com" required/>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="fullName">Họ tên</label>
            <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Ex: Nguyễn Lê Trọng Nhân" required/>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4">Giới tính</label>
            <div className="w-2/3 flex items-center">
              <label className="mr-4">
                <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={(e) => setGender(e.target.value)} readOnly/> Nam
              </label>
              <label>
                <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={(e) => setGender(e.target.value)} readOnly/> Nữ
              </label>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="phoneNumber">Số điện thoại</label>
            <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Ex: 0396478125" required/>
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="address">Địa chỉ</label>
            <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ex: 123 Quang Trung, phường 5, Quận 10, Tp.HCM" required/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
              Hủy
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
