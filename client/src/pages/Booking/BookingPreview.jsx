import React, { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingPreview.css';

const BookingPreview = () => {
    const [ticketTypes, setTicketTypes] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      fetch('/api/booking-preview/ticket-types')
        .then(response => response.json())
        .then(data => setTicketTypes(data))
        .catch(error => console.error('Error fetching ticket types:', error));
    }, []);
  
    const handleViewDetails = (ticket) => {
      setSelectedTicket(ticket);
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
      setSelectedTicket(null);
    };
  
    const handleBookTicket = (id) => {
      console.log(`Đặt vé cho ticket id: ${id}`);
    };
  
    return (
      <div className="container my-4">
        <h2>Booking Preview</h2>
        <Table striped bordered hover className="ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketTypes.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>${ticket.price.toFixed(2)}</td>
                <td>{ticket.amount}</td>
                <td>
                  <Button variant="info" className="me-2" onClick={() => handleViewDetails(ticket)}>Xem chi tiết</Button>
                  <Button variant="primary" onClick={() => handleBookTicket(ticket.id)}>Đặt vé</Button>
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
                <p><strong>ID:</strong> {selectedTicket.id}</p>
                <p><strong>Name:</strong> {selectedTicket.name}</p>
                <p><strong>Price:</strong> ${selectedTicket.price.toFixed(2)}</p>
                <p><strong>Sales:</strong> {selectedTicket.sales}</p>
                <p><strong>Description:</strong> {selectedTicket.description}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  
  export default BookingPreview;