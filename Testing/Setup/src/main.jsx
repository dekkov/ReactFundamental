import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const navbar = (
  <nav>
      <h1>Bob's Bistro</h1>
      <ul>
          <li>Testing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  navbar
)
