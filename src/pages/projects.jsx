import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

import inventoryManagementApp from '../assets/inventoryTrackerDemo.gif'
import concurrentJob from '../assets/concurrentJobManagerDemo.gif'

const Projects = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='projects-content'>
            <section>
                <div className='projects-content-container fi-element fade-in'>
                    <div>
                        <img id='itac-demo' className='demo' src={inventoryManagementApp}/>
                    </div>
                    <div className='projects-content-text'>
                        <h1>Inventory Management App</h1>
                        <h2>Tech stack: Android Studio + Java, Firebase</h2>
                        <p>Built in an Agile team of 6. Inventory tracking made easy with features such as quick barcode scanning and item lookup on Amazon/Google.</p>
                    </div>
                    <div id='project-scroll-hint'>
                        <p>Scroll Down</p>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </div>
                    
                </div>
            </section>
            <section>
                <div className='projects-content-container '>
                        <img id='cj-demo' className='demo' src={concurrentJob}/>
                    </div>
                    <div>
                        <h1>Concurrent command line</h1>
                        <h2>Tech stack: C++/C</h2>
                        <p>Tackles the challenges of concurrent programming without hiccups. Concurrent job management is the foundation that all modern software is built on.</p>
                    </div>
            </section>
            <section>
                <h1>slide 3</h1>
            </section>
            <section>
                <h1>slide 4</h1>
            </section>
            <section>
                <h1>slide 5</h1>
            </section>
            </div>
        </div>
    )
}

Projects.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Projects