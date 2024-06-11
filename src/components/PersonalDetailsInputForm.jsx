import '../styles/InputForms.css'; // Import the CSS file

export default function PersonalDetails({form, handleChange}) {

    return (
        <div className="input-form">
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
            
        </div>

    );



}