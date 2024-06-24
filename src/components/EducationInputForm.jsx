import '../styles/InputForms.css'; // Import the CSS file
import {useState} from 'react';

export default function EducationInputForm({form, handleChange}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="input-form">
            <div className="input-form-header" onClick={toggleForm}>
                <h3 className="header-text">Education Details</h3>
                {/* You can add an icon or text for indication of open/close state */}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <form>
                    <label htmlFor="degree" className="label">Degree</label>
                    <input type="text" name="degree" id="degree" className="input" value={form.degree} onChange={handleChange}/>

                    <label htmlFor="school" className="label">School</label>
                    <input type="text" name="school" id="school" className="input" value={form.school} onChange={handleChange} />

                    <label htmlFor="city" className="label">City</label>
                    <input type="text" id="city" name="city" className="input" value={form.city} onChange={handleChange}/>

                    <label htmlFor="country" className="label">County</label>
                    <input type="text" id="country" name="country" className="input" value={form.country} onChange={handleChange}/>

                    <label htmlFor="startDate" className="label">Start Date</label>
                    <input type="date" id="startDate" name="startDate" className="input" value={form.startDate} onChange={handleChange}/>

                    <label htmlFor="endDate" className="label">End Date</label>
                    <input type="date" id="endDate" name="endDate" className="input" value={form.endDate} onChange={handleChange}/>
                    
                </form>
            )}
        </div>


    )


}