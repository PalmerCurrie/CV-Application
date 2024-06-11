import '../styles/Resume.css'; // Import the CSS file

export default function Resume({personalDetails, educationDetials}) {

    return (
        <div className="container">
           <div className="personal-details-container">
                <h1 id='user-full-name' className='full-name'>{personalDetails.fullName}</h1>
                <div id='personal-details' className='personal-details-subsection'>
                    <p id='user-email'>{personalDetails.email}</p>
                    <p id='user-phonenumber'>{personalDetails.phonenumber}</p>
                    <p id='user-address'>{personalDetails.address}</p> 
                </div>
           </div>

            <div className="education-container">
                <h3 className="section-header"> Education </h3>


                    <div id='education-details' className="education-details-container">
                        <p id='user-location'>{educationDetials.city}, {educationDetials.country}</p>
                        <p id='user-school' className='school'>{educationDetials.school}</p>
                        <p id='user-date'>{educationDetials.startDate} - {educationDetials.endDate}</p>  
                        <p id='user-degree'>{educationDetials.degree}</p>
                    </div>
            </div>

        </div>

    );



}