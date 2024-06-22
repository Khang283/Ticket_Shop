import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from "axios";
import AddTicketForm from "../../components/forms/Ticket/AddTicketForm/AddTicketForm";
import EditTicketForm from "../../components/forms/Ticket/EditTicketForm/EditTicketForm"; 
import DeleteTicketForm from "../../components/forms/Ticket/DeleteTicketForm/DeleteTicketForm";
import './Ticket.css';

const Ticket = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/tickets');
            setTickets(response.data);
        } catch (error) {
            console.error('Lỗi lấy danh sách vé!', error);
        }
    };

    const handleAddButtonClick = () => {
        setShowAddForm(true);
    };

    const handleCloseAddForm = () => {
        setShowAddForm(false);
        fetchTickets();
    };

    const handleAddTicket = (newTicket) => {
        setTickets([...tickets, newTicket]);
    };

    const handleEditButtonClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowEditForm(true);
    };

    const handleCloseEditForm = () => {
        setShowEditForm(false);
        setSelectedTicket(null);
        fetchTickets();
    };

    const handleEditTicket = (updatedTicket) => {
        setTickets(tickets.map(ticket => ticket.id === updatedTicket.id ? updatedTicket : ticket));
    };

    const handleDeleteButtonClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowDeleteForm(true);
    };

    const handleCloseDeleteForm = () => {
        setShowDeleteForm(false);
        setSelectedTicket(null);
        fetchTickets();
    };

    const handleDeleteTicket = (deletedTicketId) => {
        setTickets(tickets.filter(ticket => ticket.id !== deletedTicketId));
        fetchTickets();
    };

    return (
        <div id="ticket">
            <div className="text-center">
                <h1>QUẢN LÝ VÉ</h1>
            </div>
            <div className="flex justify-between mt-2 mb-4">
                <h2>Danh sách vé</h2>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddButtonClick}
                >
                    Thêm
                </button>
            </div>
            <div>
                <table className='w-full bg-white border-collapse border border-gray-200'>
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>STT</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Tên</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Loại vé</th>
                            <th scope='col' className='px-6 text-center py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Sửa</th>
                            <th scope='col' className='px-6 text-center py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Xóa</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tickets.map((ticket, index) => (
                            <tr key={ticket.id}>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{index + 1}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticket.name}</td>
                                <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>{ticket.ticketType.name}</td>
                                <td className='border-r border-200'>
                                    <button
                                        className="w-full flex justify-center items-center text-blue-600 hover:text-blue-800"
                                        onClick={() => handleEditButtonClick(ticket)}
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="w-full flex justify-center items-center text-red-600 hover:text-red-800"
                                        onClick={() => handleDeleteButtonClick(ticket)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showAddForm && <AddTicketForm onClose={handleCloseAddForm} onAddTicket={handleAddTicket} />}
            {showEditForm && <EditTicketForm ticket={selectedTicket} onClose={handleCloseEditForm} onEditTicket={handleEditTicket} />}
            {showDeleteForm && <DeleteTicketForm ticket={selectedTicket} onClose={handleCloseDeleteForm} onDeleteTicket={handleDeleteTicket} />} {/* Thêm DeleteTicketForm */}
        </div>
    );
}

export default Ticket;
