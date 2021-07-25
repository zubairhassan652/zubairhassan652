import React from 'react';
import './sections.css';


export default function About() {
    return (
        <div className='sections--base'>
            <h1>About Me</h1>
            <div className='section'>
                <div className='about--summary'>
                    <h4>
                        Hello, Its me Zubair Hassan, Sofware Engineer at Arbisoft.
                    </h4>
                    <h5>
                        I'm a full-stack engineer with a strong preference for back-end development. 
                        I pride myself on writing clean, readable, testable and extensible code.
                        Outside of work, I am always looking to learn new frameworks, libraries and programming languages.
                        To help me truly understand these technologies, I use them in my personal projects.
                    </h5>
                </div>
            </div>
        </div>
    );
}