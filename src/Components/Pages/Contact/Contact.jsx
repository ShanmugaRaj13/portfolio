import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {message} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messageAntd, context] = message.useMessage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_faf7ova', // EmailJS service ID
      'template_bojo7wa', // EmailJS template ID
      formData,
      'wtFZ2uQI8r0t1vaxX' //EmailJS user ID
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        messageAntd.success("Successfully Email is send");
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
    },
    (err) => {
        console.log('FAILED...', err);
        messageAntd.error("Failed to send a email")
      }
    );

    };

    // For what's app
        const phoneNumber = "8925430535"; 
        const whatappmessage = "Hello! I would like to chat with you."; 
      
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatappmessage)}`;

  return (
      <div className="contact flex mt-2 pb-5" id='contact'>
        
        {context}

        <div className='contact-child'>

                <div className="component-header">
                    <h1 className="text-center mb-4">Get In Touch</h1>
                    <span></span>
                </div>

        <div className='contact-section'>
            <div className="contact-left">

                <div className="form">
                    <form action="" onSubmit={handleSubmit}>

                        <div className='inputgroup m-2 m-sm-3'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control custom-placeholder"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className='inputgroup m-2 m-sm-3'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control custom-placeholder"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your Email"
                                required
                            />
                        </div>

                        <div className="inputgroup m-2 m-sm-3">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                className="form-control custom-placeholder"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                        </div>

                        <div className="inputgroup m-2 m-sm-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control custom-placeholder"
                                id="message"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>

                        <div className='text-center'>
                            <button type='submit'>Send Email</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="contact-right p-0 p-sm-3 my-4">
                <div className='contact-details'>
                    <div className="number m-2">
                        <h2>Contact</h2>
                        <p className='ps-0 ps-md-3'> 8925430535 </p>
                    </div>
                    <div className="location m-2">
                        <h2>Based in</h2>
                        <p className='ps-0 ps-md-3'>Chennai, Tamilnadu, India</p>
                    </div>
                </div>    

                <div className='contact-icons'>
                    <a href="https://www.linkedin.com/in/shanmuga-raj-r-3902a0237/" target='_blank' rel='noreferrer' className='linkedin'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/ShanmugaRaj13" target='_blank' rel='noreferrer' className='github'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.naukri.com/mnjuser/profile" target='_blank' rel='noreferrer' className='linkedin'>
                        <FontAwesomeIcon icon={faN} />
                    </a>
                    <a href={whatsappURL} target='_blank' rel='noreferrer' className='whatsapp'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
            
        </div>

        </div>
    </div>
  );
};

export default Contact;
