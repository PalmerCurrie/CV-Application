import { useState } from 'react'
import Resume from './Resume';
import PersonalDetailsInputForm from "./PersonalDetailsInputForm"
import EducationInputForm from "./EducationInputForm"
import '../styles/App.css'
import '../styles/InputForms.css'
import '../styles/Resume.css'
import WorkExperience from './WorkExperience';

function App() {
  const [personalDetailsFormData, setPersonalFormData] = useState({
    fullName: "",
    email: "",
    phonenumber: "",
    address: ""
  });

  const [educationFormData, setEducationFormData] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    startDate: "",
    endDate: ""
  });

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




// New Stuff for WorkExperience Section

const [workExperienceData, setWorkExperienceData] = useState({
  jobTitle: "",
  company: "",
  description: "", 
  startDate: "",
  endDate: ""
});

const handleWorkExperienceChange = (e) => {
  const { name, value } = e.target;
  setWorkExperienceData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};





  return (
    <>
      <div className="body">
        <div className='input-container'>
          <PersonalDetailsInputForm form={personalDetailsFormData} handleChange={handleChange} />
          <EducationInputForm form={educationFormData} handleChange={handleEducationChange} />
          <WorkExperience 
            form={workExperienceData}
            handleChange={handleWorkExperienceChange}
            />

        </div>
        <div className='resume-container'>
          <Resume personalDetails={personalDetailsFormData} educationDetials={educationFormData}/>
        </div>
      </div>
    </>
  )
}

export default App
