import { useState } from 'react'
import Resume from './Resume';
import PersonalDetailsInputForm from "./PersonalDetailsInputForm"
import EducationInputForm from "./EducationInputForm"
import '../styles/App.css'
import '../styles/InputForms.css'
import '../styles/Resume.css'

function App() {
  const [personalDetailsFormData, setPersonalFormData] = useState({
    fullName: "",
    email: "",
    phonenumber: "",
    address: ""
  })

  const [educationFormData, setEducationFormData] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    startDate: "",
    endDate: ""
  })

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormData((prevData) => ({  
        ...prevData,
        [name]: value
    }));
};


  return (
    <>
      <div className="body">
        <PersonalDetailsInputForm form={personalDetailsFormData} handleChange={handleChange} />
        <EducationInputForm form={educationFormData} handleChange={handleEducationChange} />
        <Resume personalDetails={personalDetailsFormData} educationDetials={educationFormData}/>
      </div>
    </>
  )
}

export default App
