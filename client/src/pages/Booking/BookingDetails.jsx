import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const BookingDetails = () => {
  const [ticketTypes, setTicketTypes] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    axios.get('/api/ticketTypes')
      .then(response => setTicketTypes(response.data))
      .catch(error => console.error('Error fetching ticket types:', error));
  }, []);

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">STT</th>
            <th className="py-2">ID</th>
            <th className="py-2">Tên loại vé</th>
            <th className="py-2">Ngày tạo</th>
            <th className="py-2">Ngày cập nhật</th>
            <th className="py-2">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {ticketTypes.map((ticket, index) => (
            <tr key={ticket.id} className="text-center">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{ticket.id}</td>
              <td className="py-2">{ticket.name}</td>
              <td className="py-2">{new Date(ticket.createdAt).toLocaleString()}</td>
              <td className="py-2">{new Date(ticket.updatedAt).toLocaleString()}</td>
              <td className="py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleViewDetails(ticket)}
                >
                  Xem chi tiết vé
                </button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Đặt vé
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTicket && (
        <Modal
          isOpen={!!selectedTicket}
          onRequestClose={handleCloseModal}
          contentLabel="Ticket Details"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chi tiết vé</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Thông tin</th>
                  <th className="py-2">Giá trị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">ID</td>
                  <td className="py-2">{selectedTicket.id}</td>
                </tr>
                <tr>
                  <td className="py-2">Tên loại vé</td>
                  <td className="py-2">{selectedTicket.name}</td>
                </tr>
                <tr>
                  <td className="py-2">Giá</td>
                  <td className="py-2">{selectedTicket.price}</td>
                </tr>
                <tr>
                  <td className="py-2">Số lượng bán</td>
                  <td className="py-2">{selectedTicket.sales}</td>
                </tr>
                <tr>
                  <td className="py-2">Mô tả</td>
                  <td className="py-2">{selectedTicket.description}</td>
                </tr>
                <tr>
                  <td className="py-2">Số lượng</td>
                  <td className="py-2">{selectedTicket.amount}</td>
                </tr>
                <tr>
                  <td className="py-2">Ngày tạo</td>
                  <td className="py-2">{new Date(selectedTicket.createdAt).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Ngày cập nhật</td>
                  <td className="py-2">{new Date(selectedTicket.updatedAt).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleCloseModal}
            >
              Đóng
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BookingDetails;
