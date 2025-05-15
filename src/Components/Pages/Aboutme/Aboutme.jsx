import React, {  } from 'react';
import './Aboutme.css';


function AboutMe() {
 
    return ( 
        <div className="aboutme flex mb-3 mb-sm-4 mb-md-5" id='aboutme' >

            <div className="aboutme-child">
                
                <div className="component-header">
                    <h1>About Me</h1>
                    <span></span>
                </div>

                <div className="aboutme-summary mb-4">
                    <p>Hello, I'm Shanmugaraj, a detail-oriented and enthusiastic developer with a solid foundation in front-end and back-end development. My passion lies in building responsive, user-friendly web applications using technologies like React.js, Redux, JavaScript, HTML, CSS, and Bootstrap on the frontend, and Java, Spring Boot, and MySQL on the backend. #FrontendDeveloper #BackendDeveloper #JavaFullstackDeveloper</p>
                </div>

                <div className="aboutme-footer">

                    <div className="aboutme-footer-section1 mb-3 mb-sm-4 mb-md-5">
                        <h2>What I'm Doing</h2>
                    </div>

                    <div className="aboutme-footer-section2 mb-4">
                        <div className='p-1 p-sm-2 p-md-3'>
                            <h4 className='text-center p-2'>Frontend Development</h4>
                            <p className='p-1 p-sm-2 p-md-3'>Passionate about building clean, user-friendly websites with React and JavaScript. As a frontend developer, I love turning complex problems into simple, elegant designs.</p>
                        </div>

                        <div className='p-1 p-sm-2 p-md-3'>
                            <h4 className='text-center p-2'>Web Design</h4>
                            <p className='p-1 p-sm-2 p-md-3'>I create responsive, aesthetically pleasing, and user-focused websites using modern design. Designing clean, modern, and user-friendly websites.</p>
                        </div>
                    </div>
                    <div className="aboutme-footer-section2">
                        <div className='p-1 p-sm-2 p-md-3'>
                            <h4 className='text-center p-2'>Backend Development</h4>
                            <p className='p-1 p-sm-2 p-md-3'>I specialize in developing RESTful APIs and server-side logic using Java, Spring Boot, and MySQL. Turning business logic into high-performance backend applications.</p>
                        </div>

                        <div className='p-1 p-sm-2 p-md-3'>
                            <h4 className='text-center p-2'>Full Stack Development</h4>
                            <p className='p-1 p-sm-2 p-md-3'>I specialize in building complete web applications from clean user interfaces to robust backend systems.Turning ideas into scalable, responsive, and secure full-stack applications.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
     );
}

export default AboutMe;