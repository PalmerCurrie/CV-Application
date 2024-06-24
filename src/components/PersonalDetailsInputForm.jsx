import '../styles/InputForms.css'; // Import the CSS file
import { useState } from 'react';

export default function PersonalDetails({form, handleChange}) {


    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="input-form">
            <div className="input-form-header" onClick={toggleForm}>
                <h3 className="header-text">Personal Details</h3>
                {/* You can add an icon or text for indication of open/close state */}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
            <form>
                <label htmlFor="fullName" className="label">Full Name</label>
                <input type="text" name="fullName" id="fullName" className="input" value={form.fullName} onChange={handleChange}/>

                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" className="input" value={form.email} onChange={handleChange} />

                <label htmlFor="phonenumber" className="label">Phone Number</label>
                <input type="phonenumber" id="phonenumber" name="phonenumber" className="input" value={form.phonenumber} onChange={handleChange}/>

                <label htmlFor="address" className="label">Address</label>
                <input type="address" id="address" name="address" className="input" value={form.adress} onChange={handleChange}/>
                

            </form>
            )}
        </div>

    );



}