import { useState } from 'react'
import Resume from './Resume';
import PersonalDetailsInputForm from "./PersonalDetailsInputForm"
import '../styles/App.css'
import '../styles/PersonalDetailsInputForm.css'
import '../styles/Resume.css'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phonenumber: "",
    address: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};


  return (
    <>
      <div className="body">
        <PersonalDetailsInputForm formData={formData} handleChange={handleChange} />
        <Resume formData={formData} />
      </div>
    </>
  )
}

export default App
