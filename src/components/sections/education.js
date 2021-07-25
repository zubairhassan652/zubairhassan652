import React from 'react';
import './sections.css';
import PucitLogo from '../../static/images/pucit.png';



export default function Education() {
    return (
        <div className='sections--base'>
        <h1>Education</h1>
        <div className='section'>
        <EducationCard></EducationCard>
        </div>
        </div>
    );
}


function EducationCard (){
    return(
        <div className="info-card-container">
            <div className="logo-container">
                <img src={PucitLogo}  alt='education logo'/>
            </div>
                <div className="details-container">
                    <h3>University of the Punjab(PUCIT)</h3>
                    <h4>MSc(CS)</h4>
                    <h5>Nov 2015 - Jul 2017</h5>
                    <p>
                    Punjanb University College of Information Tecnology(PUCIT) is the one the best institution in pakistan for computer science education. I truely enjoyed the moments of lerning here.
                    </p>
            </div>
        </div>
    );
}