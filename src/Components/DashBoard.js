import React, {useState,useEffect } from 'react';
import Navbar from './Pages/Navbar/Navbar';
import '../index.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/Aboutme/Aboutme';
import Skill from './Pages/Skills/Skill';
import Certification from './Pages/Certification/Certification';
import Contact from './Pages/Contact/Contact';
import Project from './Pages/Project/Project';
import Loader from './Pages/Loader/Loader';
import Fireflies from './Pages/Background/FireFlies';


function Dash() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1800);
  
      return () => clearTimeout(timer); 
    }, []);
  

    return ( 
        <div className='Dash'>
            {
                loading ? (
                    <Loader/>
                )
                :(
                    <div className='main' >
                <Navbar/>
                    <div className='main-section scrollbar'>
                        <div className='overall-section'>
                            <Home/>
                            <AboutMe/>
                            <Skill/>
                            <Project/>
                            <Certification/>
                            <Contact/>
                            <Fireflies/>
                            <Fireflies/>
                        </div>
                    </div>
            </div>                       
            )
        }
        </div>
     );
}

export default Dash;
