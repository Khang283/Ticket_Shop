import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Receipt from './views/receipt/Receipt.jsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Ticket from './views/Ticket/Ticket.jsx'
import Ticket_Type from './views/Ticket_Type/Ticket_Type.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      {/* <Ticket/> */}
      <Ticket_Type/>
    </Router>
  </React.StrictMode>,
)
