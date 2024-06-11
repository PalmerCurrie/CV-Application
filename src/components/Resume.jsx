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
                <div className="section-header"> Education </div>
                    <h1 id='user-school' className='school'>{educationDetials.school}</h1>
                    <div id='education-details' className="experience-container">
                    <p id='user-city'>{educationDetials.degree}</p>
                        <p id='user-city'>{educationDetials.city}</p>
                        <p id='user-country'>{educationDetials.country}</p>
                        <p id='user-startdate'>{educationDetials.startDate}</p> 
                        <p id='user-enddate'>{educationDetials.endDate}</p> 
                    </div>
            </div>

        </div>

    );



}