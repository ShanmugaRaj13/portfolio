import React from 'react';
import './Project.css';
import newsmania from '../../Assets/newsmania-img.png';
import reactems from '../../Assets/react-ems-img.png';
import springbootems from '../../Assets/springboot-ems-img.png';

function Project() {
    return ( 
        <div className='project mb-4 mb-sm-5  flex' id='project'>
            <div className='project-child'>

                <div className='component-header mb-5'>
                    <h1>Projects</h1>
                    <span></span>
                </div>

                <div className='project-footer'>

                    <div className='project-section project-section1'>
                    <div>
                        <div className="project-image" data-text='React-Employee Management System'>
                            <img src={reactems} alt="amg" />
                        </div>
                        <div className='project-content'>
                            <p class="project-title mb-2 mb-sm-2 mb-md-3">Employee Management System</p>
                            <p class="project-summary">The Employee Management System is a full-stack web application that allows administrators to manage employee records efficiently. It provides role-based access control, where admins can add, edit, and delete employees, while employees can view their profiles. The frontend is built using React.js with Redux for state management and Bootstrap for styling, while the backend is developed with Spring Boot, utilizing RESTful APIs to interact with a MySQL database.</p>
                            <div className='text-center mt-1 mt-sm-2 mt-md-3'>
                                <a href='https://github.com/ShanmugaRaj13/react-ems' target='_blank' 
                                rel="noopener noreferrer" className='p-1 px-2' variant='primary'>Click To view</a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='project-section project-section2'>
                    <div>
                        <div className="project-image" data-text='Newsmania'>
                            <img src={newsmania} alt="amg" />
                        </div>
                        <div className='project-content'>
                            <p class="project-title mb-2 mb-sm-2 mb-md-3">Newsmania</p>
                            <p class="project-summary">Built a responsive single-page news application called NewsMania using React.js to fetch and display real-time news headlines from various categories such as business, entertainment, sports, and technology using a public news API. Added Search functionality to find news articles by keyword and Fully responsive UI using Bootstrap.</p>
                            <div className='text-center mt-1 mt-sm-2 mt-md-3'>
                                <a href='https://github.com/ShanmugaRaj13/news-mania' target='_blank' 
                                rel="noopener noreferrer" className='p-1 px-2' variant='primary'>Click To view</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className='project-section project-section3'>
                    <div>
                        <div className="project-image" data-text='Java-EmployeeManagementSystem'>
                            <img src={springbootems} alt="amg" />
                        </div>
                        <div className='project-content'>
                            <p class="project-title mb-2 mb-sm-2 mb-md-3">Java-EmployeeManagementSystem</p>
                            <p class="project-summary">The Employee Management System is a web-based application developed using Java Servlets and JSP that allows basic CRUD Create, Read, Update, Delete operations on employee records. It is designed for small to medium organizations to manage employee data in a structured manner through a simple and intuitive interface.</p>
                            <div className='text-center mt-1 mt-sm-2 mt-md-3'>
                                <a href='https://github.com/ShanmugaRaj13/java-ems' target='_blank' 
                                rel="noopener noreferrer" className='p-1 px-2' variant='primary'>Click To view</a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='project-section project-section4'>
                    <div>
                        <div className="project-image" data-text='SpringBoot-EmployeeManagementSystem'>
                            <img src={springbootems} alt="amg" />
                        </div>
                        <div className='project-content'>
                            <p class="project-title mb-2 mb-sm-2 mb-md-3">SpringBoot-EmployeeManagementSystem</p>
                            <p class="project-summary">The Employee Management System is a full-stack backend application built using Spring Boot that allows authenticated users to manage employee records through CRUD operations. It implements role-based access control where admins can manage employee data, and normal users can view their own profile. The system ensures secure access using authentication or Spring Security with session-based login, and stores data in a MySQL database.</p>
                            <div className='text-center mt-1 mt-sm-2 mt-md-3'>
                                <a href='https://github.com/ShanmugaRaj13/springboot-ems' target='_blank' 
                                rel="noopener noreferrer" className='p-1 px-2' variant='primary'>Click To view</a>
                            </div>
                        </div>
                    </div>
                    </div>


                </div>

            </div>
        </div> 
    );
}

export default Project;