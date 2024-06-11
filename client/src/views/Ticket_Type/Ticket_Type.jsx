import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import AddTicketTypeForm from '../../components/forms/AddTicketTypeForm/AddTicketTypeForm';
import EditTicketTypeForm from '../../components/forms/EditTicketTypeForm/EditTicketTypeForm';
import DeleteTicketTypeForm from '../../components/forms/DeleteTicketTypeForm/DeleteTicketTypeForm';

const Ticket_Type = () => {
    const [ticketTypes, setTicketTypes] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [selectedTicketType, setSelectedTicketType] = useState(null);

    const fetchTicketTypes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/ticketTypes');
            const dataTicketType = response.data;
            if (Array.isArray(dataTicketType)) {
                setTicketTypes(dataTicketType);
            } else {
                console.log('Dữ liệu không phải mảng!', dataTicketType);
            }
        } catch (error) {
            console.log('Lỗi load dữ liệu! ', error);
        }
    };

    useEffect(() => {
        fetchTicketTypes();
    }, []);

    const handleAddButtonClick = () => {
        setShowAddForm(true);
    };
    
    const handleCloseAddForm = () => {
        setShowAddForm(false);
        fetchTicketTypes();
    };

    const handleEditButtonClick = (ticketType) => {
        setSelectedTicketType(ticketType);
        setShowEditForm(true);
    };

    const handleCloseEditForm = () => {
        setShowEditForm(false);
        setSelectedTicketType(null);
        fetchTicketTypes();
    };

    const handleDeleteButtonClick = async (ticketType) => {
        setSelectedTicketType(ticketType);
        setShowDeleteForm(true);  
    };

    const handleCloseDeleteForm = () => {
        setShowDeleteForm(false);
        setSelectedTicketType(null);
        fetchTicketTypes();
    }

    return (
        <div id="ticket">
            <div className="text-center">
                <h1>QUẢN LÝ LOẠI VÉ</h1>
            </div>
            <div className="flex justify-between mt-2 mb-4">
                <h2>Danh sách loại vé</h2>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddButtonClick}>Thêm</button>
            </div>
            <div>
                <table className='w-full bg-white border-collapse border border-gray-200'>
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>STT</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Tên</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Giá</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Khuyến mãi</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Mô tả</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Số lượng</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Sửa</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Xóa</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {ticketTypes.map((ticketType, index) => (
                            <tr key={ticketType.id}>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{index + 1}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticketType.name}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticketType.price}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticketType.sales}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticketType.description}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticketType.amount}</td>
                                <td className='border-r border-gray-200'>
                                    <button className="w-full flex justify-center items-center text-blue-600 hover:text-blue-800"
                                    onClick={() => handleEditButtonClick(ticketType)}>
                                        <FaEdit />
                                    </button>
                                </td>
                                <td>
                                    <button className="w-full flex justify-center items-center text-red-600 hover:text-red-800"
                                    onClick={() => handleDeleteButtonClick(ticketType)}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showAddForm && <AddTicketTypeForm onClose={handleCloseAddForm} />}
            {showEditForm && <EditTicketTypeForm ticketType={selectedTicketType} onClose={handleCloseEditForm} />}
            {showDeleteForm && <DeleteTicketTypeForm ticketType={selectedTicketType} onClose={handleCloseDeleteForm}/>}
        </div>
    );
};

export default Ticket_Type;
