import React, { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingPreview.css';

// Mock data
/*const ticketTypes = [
  {
    id: 1,
    name: 'VIP Ticket',
    price: 150.00,
    amount: 20,
    sales: 100,
    description: 'This is a VIP ticket with premium benefits.',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-10T12:00:00Z'
  },
  {
    id: 2,
    name: 'Standard Ticket',
    price: 75.00,
    amount: 50,
    sales: 200,
    description: 'This is a standard ticket.',
    createdAt: '2024-01-02T11:00:00Z',
    updatedAt: '2024-01-11T13:00:00Z'
  },
  {
    id: 3,
    name: 'Economy Ticket',
    price: 35.00,
    amount: 100,
    sales: 300,
    description: 'This is an economy ticket.',
    createdAt: '2024-01-03T12:00:00Z',
    updatedAt: '2024-01-12T14:00:00Z'
  }
];*/

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