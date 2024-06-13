import React, { useState, useEffect } from "react";
import axios from "axios";

const AddTicketForm = ({ onClose }) => {
    const [ticketName, setTicketName] = useState("");
    const [ticketTypes, setTicketTypes] = useState([]);
    const [selectedTicketType, setSelectedTicketType] = useState("");

    useEffect(() => {
        // Lấy danh sách loại vé từ API
        const fetchTicketTypes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/ticketTypes');
                setTicketTypes(response.data);
            } catch (error) {
                console.log('Lỗi lấy danh sách loại vé! ', error);
            }
        };

        fetchTicketTypes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/v1/tickets', {
                name: ticketName,
                ticketTypeId: selectedTicketType,
            });
            alert("Thêm vé thành công!");
            onClose();
        } catch (error) {
            console.log('Lỗi thêm vé! ', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-left">
                <h1 className="text-center">Thêm vé</h1>
                <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="ticketname">Tên vé</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="ticketname" value={ticketName} onChange={(e) => setTicketName(e.target.value)} placeholder="Ex: Vé thường" required />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="tickettype">Loại vé</label>
                        <select className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tickettype" value={selectedTicketType} onChange={(e) => setSelectedTicketType(e.target.value)} required>
                            <option value="" disabled>Chọn loại vé</option>
                            {ticketTypes.map((type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                        </select>
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

export default AddTicketForm;
