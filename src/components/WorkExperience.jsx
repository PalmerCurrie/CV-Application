import '../styles/InputForms.css'; // Import the CSS file
import { useState} from 'react';

export default function WorkExperience({form, handleChange}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    // const handleSubmit = () => {
    //     // do something on form submit
    // }


    return (
        <div className="input-form">
            <div className="input-form-header" onClick={toggleForm}>
                <h3 className="header-text">Work Experience</h3>
                {/* You can add an icon or text for indication of open/close state */}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                // <form onSubmit={handleSubmit}>
                <form>
                    <label htmlFor="jobTitle" className="label">Job Title</label>
                    <input type="text" name="jobTitle" id="jobTitle" className="input" value={form.jobTitle} onChange={handleChange}/>

                    <label htmlFor="company" className="label">Company</label>
                    <input type="text" name="company" id="company" className="input" value={form.company} onChange={handleChange} />

                    <label htmlFor="description" className="label">Description</label>
                    <input type="text" id="description" name="description" className="input" value={form.description} onChange={handleChange}/>

                    <label htmlFor="startDate" className="label">Start Date</label>
                    <input type="date" id="startDate" name="startDate" className="input" value={form.startDate} onChange={handleChange}/>

                    <label htmlFor="endDate" className="label">End Date</label>
                    <input type="date" id="endDate" name="endDate" className="input" value={form.endDate} onChange={handleChange}/>

                    {/* <button type="submit">Save</button> */}
                    

                </form>
            )}
        </div>


    )


}