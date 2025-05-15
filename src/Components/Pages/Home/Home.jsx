import {React} from 'react';
import './Home.css';
import avatar from '../../Assets/photo-removebg-preview.png'
import { } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return ( 
        <div className='home my-3 my-sm-5' id='home'>

        <div className='home-child'>
            <div className='home-summary '>

                <div className='home-summary-header'>
                    <h1>Hello I'm</h1>
                    <h1>Shanmuga Raj</h1>
                    <h1>Java Full Stack Developer</h1>
                </div>

                <div className='home-summary-para my-4 mb-4 mb-sm-5'>
                    <p>I'm Full Stack Developer from Chennai, India. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                </div>

                <div className='home-summary-footer mb-4 px-3'>
                    <div className='hsf-left'>
                        <a href="/Shanmugaraj_Java_Full_Stack.pdf" download="My_Resume.pdf" className='text-center'><span></span></a>
                    </div>

                    <div className='hsf-right'>
                        <a href="https://www.linkedin.com/in/shanmuga-raj-r-3902a0237/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='font-foot' icon={faLinkedin} size='' /></a>
                        <a href="#contact"><FontAwesomeIcon className='font-foot' icon={faEnvelope} size='' /></a>
                        <a href="https://github.com/ShanmugaRaj13" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='font-foot' icon={faGithub} size='' /></a>
                    </div>
                </div>

            </div>

            <div className='home-img p-5'>
                <img src={avatar} alt='avatar' />
            </div>

        </div>
        </div>
     );
}

export default Home;