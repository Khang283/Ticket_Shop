import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

// Dummy data for demonstration
const ticketTypes = [
  {
    id: 1,
    name: "VIP Ticket",
    createdAt: "2023-06-01T12:34:56Z",
    updatedAt: "2023-06-10T12:34:56Z",
    price: 100,
    sales: 50,
    description: "VIP ticket with exclusive benefits",
    amount: 200,
  },
  {
    id: 2,
    name: "Standard Ticket",
    createdAt: "2023-06-02T12:34:56Z",
    updatedAt: "2023-06-11T12:34:56Z",
    price: 50,
    sales: 150,
    description: "Standard ticket",
    amount: 500,
  },
  // Add more tickets as needed
];


const BookingDetails = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };
  const navigate = useNavigate();
  const proceedPayment = async (item) => {
    const ticketTypeId = item.id;
    const name = item.name;
    const price = item.price;
    console.log(item);
    navigate("/booking", {
      replace: true,
      state: { ticketTypeId, name, price },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b w-1/12">STT</th>
              <th className="py-2 px-4 border-b w-2/12">ID</th>
              <th className="py-2 px-4 border-b w-4/12">Tên loại vé</th>
              <th className="py-2 px-4 border-b w-5/12">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {ticketTypes.map((ticket, index) => (
              <tr key={ticket.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{ticket.id}</td>
                <td className="py-2 px-4 border-b">{ticket.name}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleViewDetails(ticket)}
                  >
                    Xem chi tiết vé
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      proceedPayment(ticket);
                    }}
                  >
                    Đặt vé
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Thông tin</th>
                  <th className="py-2 px-4 border-b">Giá trị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">ID</td>
                  <td className="py-2 px-4 border-b">{selectedTicket.id}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Tên loại vé</td>
                  <td className="py-2 px-4 border-b">{selectedTicket.name}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Giá</td>
                  <td className="py-2 px-4 border-b">{selectedTicket.price}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Số lượng bán</td>
                  <td className="py-2 px-4 border-b">{selectedTicket.sales}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Mô tả</td>
                  <td className="py-2 px-4 border-b">
                    {selectedTicket.description}
                  </td>
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
