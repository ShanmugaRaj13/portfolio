import React, {useEffect} from 'react';
import './Certification.css';
import Aos from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles


function Certification() {

    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in milliseconds
          once: true,      // Whether animation should happen only once while scrolling down
        });
      }, []);  // Empty array means this effect runs once when the component mounts
      

    return ( 
        <div className='certification flex' id='certification'>
            <div className="child"> 

                <div className='study-1'>

                    <div className="component-header" >
                        <h1>Certification</h1>
                        <span></span>
                    </div>

                    <div className="study-main p-0 p-sm-3">
                        <div className='ms-5 mb-3'>
                            <span></span>
                                <p><b>Completed Java-FullStack Development.</b>
                                <div>Covers HTML, CSS, JavaScript, Java, Mysql, Bootstrap, React, Springboot and Redux. I specialize in building complete web applications from clean user interfaces to robust backend systems.Provided by Besant Technology,chennai.</div></p>
                            <span></span>
                        </div>
                        <div className='ms-5 mb-3'>
                            <span></span>
                                <p>Completed Responsive web design in FreeCodeCamp.</p>
                            <span></span>
                        </div>
                    </div>

                </div>

                <div className='study-2'>

                    <div className="component-header">
                        <h1>Education</h1>
                        <span></span>
                    </div>

                    <div className='study-main p-0 p-sm-3'>
                        <div className='ms-5 mb-3'>
                            <span></span>
                                <p><b>Bachelor of Engineering in Mechanical Engineering.</b>
                                <div>Sri Shakthi Institute of Engineering and Technology With CGPA of 7.84/10 in 2023, Coimbatore.</div></p>
                            <span></span>
                        </div>
                        <div className='ms-5 mb-3'>
                            <span></span>
                                <p>Completed HSC in Thirumurugan matriculation higher secondry school with 70.5% in 2019, Tirupur.</p>
                            <span></span>
                        </div>
                        <div className='ms-5 mb-3'>
                            <span></span>
                                <p>Completed SSLC in Thirumurugan matriculation higher secondry school with 94% in 2017, Tirupur.</p>
                            <span></span>
                        </div>
                    </div>

                </div>


            </div>

        </div>
     );
}

export default Certification;