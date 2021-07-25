import React, {useState} from 'react';
import './sections.css';
import PortfolioLogo from '../../static/images/portfolio.png';
import DigitalMarkingLogo from '../../static/images/digitalmarking.png';
import CellonLogo from '../../static/images/cellon.png';
import SomniLogo from '../../static/images/somni.png';


export default function Projects() {
    const [state] = useState(
        [
            {
                logo: SomniLogo,
                project_name: 'Somni',
                url: 'https://smni.alchemative.net',
                details: [
                    'This is a SAAS based product to customize shopify to fulfill the needs of local customers',
                ]
            },
            {
                logo: PortfolioLogo,
                project_name: 'React Portfolio',
                url: '/',
                details: [
                    'This is personal react portfolio written from scratch',
                ]
            },
            {
                logo: CellonLogo,
                project_name: 'Cellon',
                url: 'https://cellon.alchemative.net/',
                details: [
                    'This app is about to view and download specific data of a shopify store',
                ]
            },
            {
                logo: DigitalMarkingLogo,
                project_name: 'Digital Marking',
                url: 'https://digitalmarking.herokuapp.com/',
                details: [
                    'This project is about Optimal Mark Recognition (OMR) reading',
                ]
            }
        ]
    );


    return ( 
        <div className = 'sections--base' >
        <h1> Projects </h1> 
        <div className = 'section'>
        <div className = "projects-container"> 
            {state.map((item, index) => 
                <ProjectsCard key={index} project={item} />
            )}
        </ div>
        </div>  
        </div>
    );
}

export function ProjectsCard(props) {
    const project = props.project;

    return ( 
        < div className = "project-container"> 
            < div className = "heading"> 
                <a href={project.url} 
                target="_blank ">{project.project_name}</a>
            </div>
                    
            <div className="body">
                <div className="overlay">
                    <div className="description-container ">
                    {project.details.map(paragraph => 
                        <p>{paragraph}</p>
                    )}
                    </div>
                </div>
                <img className="project-image" src={project.logo} alt='project logo'/>
            </div>     
        </div>
        
    );
}