import React, { useState } from 'react';

export default function Skills () {
    const [state] = useState([
        'python',
        'django',
        'react',
        'git',
        'github',
        'ubuntu',
        'ssh',
        'nginx',
        'postgresql',
        'mysql',
        'html5',
        'css3',
        'javascript',
        'pycharm',
        'visualstudio',
    ]);
    return (
        <div className='sections--base'>
        <h1>Skills</h1>
        <div className='section'>
            <div className='skills-container'>
            {state.map((item, index) => 
                <SkillCard key={index} name={item} />
            )}
            </div>
        </div>
        </div>
    );
}


function SkillCard (props) {
    const name = props.name;
    let devicon_name;
    if(name ==='github' || name === 'ssh'){
        devicon_name = `devicon-${name}-original`;
    }else{
        devicon_name = `devicon-${name}-plain`
    }
    
    console.log(name);
    return (
        <div className="skill-container large">
        <i className={`icon ${devicon_name} colored`}></i>
        <span className="name">{name}</span>
        </div>
        
    );
}