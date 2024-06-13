import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Receipt from './views/receipt/Receipt.jsx'
import Booking from './views/booking/Booking.jsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Ticket from './views/Ticket/Ticket.jsx'
import Receipts from './views/admin/receipt/Receipts.jsx'
import User from './views/User/User.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Ticket/> */}
      {/* <Booking/> */}
      <Receipts/>
      {/* <User /> */}
    </Router>
  </React.StrictMode>,
)
