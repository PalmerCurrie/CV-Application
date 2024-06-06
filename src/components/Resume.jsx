import '../styles/Resume.css'; // Import the CSS file

export default function Resume({formData}) {

    return (
        <div className="container">
           <div className="personal-details-container">
                <h1 id='user-full-name' className='full-name'>{formData.fullName}</h1>
                <div id='personal-details'>
                    <p id='user-email'>{formData.email}</p>
                    <p id='user-phonenumber'>{formData.phonenumber}</p>
                    <p id='user-address'>{formData.address}</p> 
                </div>
                <p></p>
           </div>
        </div>

    );



}