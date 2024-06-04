import React from 'react'
import ReactDOM from 'react-dom/client'
// import PersonalDetails from './components/PersonalDetails.jsx'
import PersonalDetailsInputForm from "./components/PersonalDetailsInputForm.jsx"
import Resume from './components/Resume.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersonalDetails firstName="first name" /> */}
    <PersonalDetailsInputForm />
    <Resume />
  </React.StrictMode>,
)
