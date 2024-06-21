import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingPreview.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BookingPreview = () => {
  const [ticketTypes, setTicketTypes] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fetchTickets = async () => {
    await axios
      .get(`http://localhost:3000/api/v1/ticketTypes`)
      .then((response) => {
        console.log(response.data)
        setTicketTypes(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    
    fetchTickets();
  }, []);

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
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
    <div className="container my-4">
      <h2>Booking Preview</h2>
      <Table striped bordered hover className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên vé</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {ticketTypes.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.name}</td>
              <td>{ticket.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
              <td>{ticket.amount}</td>
              <td>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => handleViewDetails(ticket)}
                >
                  Xem chi tiết
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    proceedPayment(ticket);
                  }}
                >
                  Đặt vé
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết vé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTicket && (
            <div>
              <p>
                <strong>ID:</strong> {selectedTicket.id}
              </p>
              <p>
                <strong>Tên vé:</strong> {selectedTicket.name}
              </p>
              <p>
                <strong>Giá:</strong> {selectedTicket.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
              </p>
              <p>
                <strong>Sale:</strong> {selectedTicket.sales}
              </p>
              <p>
                <strong>Mô tả:</strong> {selectedTicket.description}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookingPreview;
