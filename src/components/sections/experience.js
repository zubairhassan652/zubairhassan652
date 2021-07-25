import React, { useState } from 'react';
import './sections.css';
import ArbisoftLogo from '../../static/images/arbisoft.jpeg';
import AlchemativeLogo from '../../static/images/alchemative.png';
import HexasoftLogo from '../../static/images/hexasoft.jpeg';

export default Experience 

function Experience() {
    
    const [state] = useState(
        [
            {
                logo: ArbisoftLogo,
                company_name: 'Arbisoft',
                designation: 'Software Engineer',
                duration: 'Jul 2020 - Present',
                details: [
                    'Here i am working as softwrae engineer, as a part of Arbisoft working on fintech project that meets heigh standards of development.',
                ]
            },
            {
                logo: AlchemativeLogo,
                company_name: 'Alchemative',
                designation: 'Python Developer',
                duration: 'Nov 2019 - Jul 2020',
                details: [
                    'Here i work on backend of the ecommerce plateforms that entract with shopify to fulfill local customer needs.',
                    'The plateform provides customization of shopify for local merchants to provide logisc services as well as financials services to there customer for the ease of online shoping. The implementaion of the product was SAAS based architecture'
                ]
            },
            {
                logo: HexasoftLogo,
                company_name: 'Hexasoft',
                designation: 'Django Developer',
                duration: 'Jul 2019 - Oct 2019',
                details: [
                    'Here i am working as entry level developer, focus on building small piece of software and acquiring the domain knowledge of web development in following areas.',
                    'django-rest-framework, django user management, social auth2.0, payment integration, unit testing, xmldocx, git & gitlab and blockchain development workflow.'
                ]
            }
        ]
    );

    const list_items = state.map((item, index) => 
        <ExperianceCard key={index} data={item} />
    );
    


    return (
        <div className='sections--base'>
        <h1>Experience</h1>
        <div className='section'>
        {list_items}
        {/* <ExperianceCard></ExperianceCard> */}
        
        </div>
        </div>
    ); 
}

function ExperianceCard (props){
    const data = props.data;
    return(
        <div className="info-card-container">
            <div className="logo-container">
                <img src={data.logo}  alt='experiace logo'/>
            </div>
                <div className="details-container">
                    <h3>{data.company_name}</h3>
                    <h4>{data.designation}</h4>
                    <h5>{data.duration}</h5>
                    {data.details.map(paragraph => 
                        <p>{paragraph}</p>
                    )}
            </div>
        </div>
    );
}





// function ExperianceCard (props){
//     const data = props.data;
//     return(
//         <div className="info-card-container">
//             <div className="logo-container">
//                 <img src={AWSLOGO}  alt='experiace logo'/>
//             </div>
//                 <div className="details-container">
//                     <h3>Amazon Web Services</h3>
//                     <h4>Front End Engineer II</h4>
//                     <h5>April 2020 - Present</h5>
//                     <p>
//                     I worked on Uplifting the Wholesale platform – a fork of Ratesetter’s
//                     Retail platform that enables institutional investors to invest into the RateSetter platform.
//                     Utilising .NET, .NET Core, React, Angular 2+, SQL Server.
//                     </p>
//             </div>
//         </div>
//     );
// }