import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './views/User/User.jsx'
import Receipt from './views/receipt/Receipt.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Receipt/>
  </React.StrictMode>,
)
