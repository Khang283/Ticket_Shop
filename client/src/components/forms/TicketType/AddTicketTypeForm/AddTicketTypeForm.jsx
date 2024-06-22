import React, { useState } from "react";
import axios from 'axios';

const AddTicketTypeForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        sales: '',
        description: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/ticketTypes', formData);
            console.log('Dữ liệu đã được gửi thành công!', response.data);
            onClose();
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu!', error);
        }
    };

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-left">
                <h1 className="text-center">Thêm loại vé</h1>
                <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="name">Tên loại vé</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Ex: Vé thường" required/>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="price">Giá tiền</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="price" value={formData.price} onChange={handleChange} placeholder="Ex: 70000" required/>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="sales">Khuyến mãi</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="sales" value={formData.sales} onChange={handleChange} placeholder="Ex: 70000" required/>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="description">Mô tả</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="description" value={formData.description} onChange={handleChange} placeholder="Ex: Đây là vé thường" required/>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="amount">Số lượng</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="amount" value={formData.amount} onChange={handleChange} placeholder="Ex: 100" required/>
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
    )
}

export default AddTicketTypeForm;
