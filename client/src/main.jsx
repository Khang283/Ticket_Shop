import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './views/User/User.jsx'
import Booking_QR from './views/booking_QR/Booking.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Booking_QR/>
  </React.StrictMode>,
)
