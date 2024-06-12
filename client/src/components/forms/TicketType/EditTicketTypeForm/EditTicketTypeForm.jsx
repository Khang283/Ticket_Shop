import React, { useState, useEffect } from "react";
import axios from 'axios';

const EditTicketTypeForm = ({ ticketType, onClose }) => {
    const [id, setId] = useState(ticketType.id);
    const [name, setName] = useState(ticketType.name);
    const [price, setPrice] = useState(ticketType.price);
    const [sales, setSales] = useState(ticketType.sale);
    const [description, setDescription] = useState(ticketType.description);
    const [amount, setAmount] = useState(ticketType.amount);

    useEffect(() => {
        setId(ticketType.id);
        setName(ticketType.name);
        setPrice(ticketType.price);
        setSales(ticketType.sales);
        setDescription(ticketType.description);
        setAmount(ticketType.amount);
    }, [ticketType]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedTicketType = {
                id,
                name, 
                price, 
                sales, 
                description,
                amount
            };
            const response = await axios.put(`http://localhost:3000/api/v1/ticketTypes/${id}`, updatedTicketType);
            console.log('Dữ liệu đã được cập nhật thành công!', response.data);
            alert("Cập nhật thành công!");
            onClose();
        } catch (error) {
            console.error('Lỗi khi cập nhật dữ liệu!', error.response?.data || error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-left">
                <h1 className="text-center">Cập nhật loại vé</h1>
                <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="name">Tên loại vé</label>
                        <input
                            className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="price">Giá tiền</label>
                        <input
                            className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="sales">Khuyến mãi</label>
                        <input
                            className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="sales" value={sales} onChange={(e) => setSales(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="description">Mô tả</label>
                        <input
                            className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="amount">Số lượng</label>
                        <input
                            className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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

export default EditTicketTypeForm;
