import React, { useState } from 'react';
import classNames from 'classnames';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPalette } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [activeItem, setActiveItem] = useState('home');
    const handleActive = (item) => {
        setActiveItem(item);
    }

    // Change color of main color
    const color =['hsl(45, 100%, 72%)','hsl(0, 100%, 50%)','hsl(30, 100%, 50%)','hsl(197, 71%, 73%)'];
    let count = 1;
    const handleChangeColor = () =>{
        if(count<4){
            document.documentElement.style.setProperty('--main-color',color[count]);
            count++;
            console.log(count);
            
        }else{
            count = 0;
            handleChangeColor();
        }
    }


    return ( 
        <div className='navbar'>

            <div className='header px-5 py-2' >
              <div >
                <ul className='nav nav-pills'>
                    <li onClick={() => handleActive('home')} className=''>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'home' })}
                        href="#home">Home</a>
                    </li>
                    <li onClick={() => handleActive('aboutme')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'aboutme' })} href="#aboutme">About Me</a>
                    </li>
                    <li onClick={() => handleActive('skills')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'skills' })} href="#skill">Skills</a>
                    </li>
                    <li onClick={() => handleActive('projects')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'projects' })} href="#project">Projects</a>
                    </li>
                    <li onClick={() => handleActive('certification')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'certification' })} href="#certification">Certification</a>
                    </li>
                    <li onClick={() => handleActive('contact')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'contact' })} href="#contact">Get in Touch</a>
                    </li>
                </ul>
            </div>

            <div className='colorchanger'>
                <FontAwesomeIcon className='fontcolor' icon={faPalette} onClick={handleChangeColor} />
            </div>

         </div>

            <div className='footer-parent'>
                <div className='footer px-2'>

                <ul className='nav'>
                    <li onClick={() => handleActive('home')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'home' })}
                        href="#home">Home</a>
                    </li>
                    <li onClick={() => handleActive('aboutme')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'aboutme' })} href="#aboutme">AboutMe</a>
                    </li>
                    <li onClick={() => handleActive('skills')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'skills' })} href="#skill">Skills</a>
                    </li>
                    <li onClick={() => handleActive('projects')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'projects' })} href="#project">Projects</a>
                    </li>
                    <li onClick={() => handleActive('certification')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'certification' })} href="#certification">Certification</a>
                    </li>
                    <li onClick={() => handleActive('contact')}>
                        <a className={classNames('navbar-item', { 'active': activeItem === 'contact' })} href="#contact">GetInTouch</a>
                    </li>
                    <li>
                        <div className='colorchanger'>
                            <FontAwesomeIcon className='fontcolor fontcolor-mob' icon={faPalette} onClick={handleChangeColor} size='sm'/>
                        </div>
                    </li>
                </ul>

            </div>
            </div>

        </div>
     );
}

export default Navbar;