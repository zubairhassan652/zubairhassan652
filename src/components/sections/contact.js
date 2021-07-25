import React from 'react';

export default function Contact () {
    return (
        <div className='sections--base'>
        <h1>Contact Me</h1>
        <div className='section'>
        <Socials></Socials>
        </div>
        </div>
    );
}

function Socials() {
    return (
        <div class="contact-container">
            <div class="social-container">
                <a href="https://www.linkedin.com/in/zubairhassan652/" class="social-item-container ln">
                    <div class="icon-container"><i class="icon devicon-linkedin-plain colored"></i>
                    </div><span class="name">LinkedIn</span></a>
                <a href="https://github.com/zubairhassan652/" class="social-item-container gh">
                    <div class="icon-container"><i class="icon devicon-github-original colored"></i></div>
                    <span class="name">GitHub</span></a>
                {/* <a href="https://stackoverflow.com/users/12395575/zubair-hassan" class="social-item-container so">
                    <div class="icon-container"><i class="icon fa-stack-overflow"></i></div>
                    <span class="name">Stack Overflow</span></a> */}
            </div>
                            
        </div>
    );
}