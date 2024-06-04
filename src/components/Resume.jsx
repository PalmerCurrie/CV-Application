import '../styles/Resume.css'; // Import the CSS file

export default function Resume() {

    return (
        <div className="container">
           <div className="personal-details-container">
                <h1 id='user-full-name' className='full-name'>John Smith</h1>
                <div id='personal-details'>
                    <p id='user-email'>johnsmith@gmail.com</p>
                    <p id='user-phonenumber'>778 555 7777</p>
                    <p id='user-address'>Vancouver, BC, Canada</p>
                </div>
                <p></p>
           </div>
        </div>

    );



}