import '../styles/PersonalDetailsInputForm.css'; // Import the CSS file

export default function PersonalDetails({formData, handleChange}) {

    return (
        <div className="personal-details-input-form">
            <form>
                <label htmlFor="fullName" className="label">Full Name</label>
                <input type="text" name="fullName" id="fullName" className="input" value={formData.fullName} onChange={handleChange}/>

                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" className="input" value={formData.email} onChange={handleChange} />

                <label htmlFor="phonenumber" className="label">Phone Number</label>
                <input type="phonenumber" id="phonenumber" name="phonenumber" className="input" value={formData.phonenumber} onChange={handleChange}/>

                <label htmlFor="address" className="label">Address</label>
                <input type="address" id="address" name="address" className="input" value={formData.adress} onChange={handleChange}/>
                

            </form>
            
        </div>

    );



}