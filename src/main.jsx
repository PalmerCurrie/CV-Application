import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonalDetails from './components/PersonalDetails.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalDetails firstName="first name" />
  </React.StrictMode>,
)
