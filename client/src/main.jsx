import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './views/User/User.jsx'
import Receipt from './views/receipt/Receipt.jsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
