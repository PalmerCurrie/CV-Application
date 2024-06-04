import '../styles/PersonalDetailsInputForm.css'; // Import the CSS file

export default function PersonalDetails() {

    return (
        <div className="personal-details-input-form">
            <form>
                <label htmlFor="full-name" className="label">Full Name</label>
                <input type="text" name="full-name" id="full-name" className="input"/>

          
                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" className="input" />

                <label htmlFor="phonenumber" className="label">Phone Number</label>
                <input type="phonenumber" id="phonenumber" name="phonenumber" className="input" />

                <label htmlFor="address" className="label">Address</label>
                <input type="address" id="address" name="address" className="input" />
                

            </form>
            
        </div>

    );



}