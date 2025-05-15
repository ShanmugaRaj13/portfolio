import React from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGit, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skill() {

    return ( 
        <div className="skill flex mb-3 mb-sm-4" id='skill'>
            <div className="skill-child">

                <div className="component-header">
                    <h1>My Skills</h1>
                    <span></span>
                </div>

                <div className='skill-section'>

                    <div className="skill-section-1 ss-common p-2 p-sm-4 mt-2 mt-sm-3 mt-md-4">
                        <h3 className='mb-3 mb-sm-5'>Programming languages</h3>
                        <div className='programminglangs fontsame' >
                            <div className='html' style={{'--r':'-15'}} data-text='HTML'>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </div>
                            <div className="css" style={{'--r':'5'}}  data-text="CSS">
                                <FontAwesomeIcon icon={faCss3}/>
                            </div>
                            <div className="js" style={{'--r':'25'}}  data-text="JAVASCRIPT">
                                <FontAwesomeIcon icon={faJsSquare}/>
                            </div>
                            <div className="js" style={{'--r':'35'}}  data-text="SQL">
                                <FontAwesomeIcon icon={faDatabase}/>
                            </div>
                            <div className="java" style={{'--r':'35'}}  data-text="JAVA">
                                <FontAwesomeIcon icon={faJava}/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-section-2 ss-common p-2 p-sm-4 mt-2 mt-sm-3 mt-md-4 ">
                        <h3 className='mb-3 mb-sm-5'>Frameworks/Libraries</h3>
                        <div className="frameworks fontsame">
                            <div className="react" style={{'--r':'-10'}} data-text='REACT JS'>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div className="react" style={{'--r':'10'}} data-text='REDUX'>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div className="springboot" style={{'--r':'20'}} data-text='SPRINGBOOT'>
                                <FontAwesomeIcon icon={faJava}/>
                            </div>
                            <div className="react-bootstrap" style={{'--r':'30'}} data-text='BOOTSTRAP'>
                                <FontAwesomeIcon icon={faBootstrap}/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-section-3 ss-common p-2 p-sm-4
                    mt-2 mt-sm-3 mt-md-4 ">
                        <h3 className='mb-3 mb-sm-5'>Tools/VersionControl</h3>
                        <div className="tools fontsame">
                            <div className="github" style={{'--r':'-10'}} data-text='GIT'>
                                <FontAwesomeIcon icon={faGit}/>
                            </div>
                            <div className="vscode" style={{'--r':'10'}} data-text='VS CODE'>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div className="eclipse" style={{'--r':'20'}} data-text='ECLIPSE'>
                                <FontAwesomeIcon icon={faJava}/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}

export default Skill;