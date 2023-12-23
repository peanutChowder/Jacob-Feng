import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

import inventoryManagementApp from '../assets/inventoryTrackerDemo.gif'
import concurrentJob from '../assets/concurrentJobManagerDemo.gif'
import coolGpt from '../assets/coolGptDemo.gif'

const Projects = ({ menuOpen, setMenuOpen }) => {
    window.scrollTo(0, 0);
    useEffect(() => {
        const { innerWidth: width, } = window
        if (width <= 830) {
            setMenuOpen("close")
        }
    }, [setMenuOpen])
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
                        <h2>(<a href='https://github.com/CMPUT301F23T29/agile-beast'>Github</a>) Tech stack: Android Studio + Java, Firebase.</h2>
                        <p>Built in an Agile team of 6. Inventory tracking made easy with features such as quick barcode scanning and item lookup on Amazon/Google.</p>
                    </div>
                    <div id='project-scroll-hint'>
                        <p>Scroll Down</p>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </div>
                    
                </div>
            </section>
            <section>
                <div className='projects-content-container'>
                    <div>
                        <img id='cj-demo' className='demo' src={concurrentJob}/>
                    </div>      
                    <div className='projects-content-text'>
                        <h1>Concurrent command line</h1>
                        <h2>(<a href='https://github.com/peanutChowder/Shell-Simulator'>Github</a>) Tech stack: C++/C</h2>
                        <p>Tackles the challenges of concurrent programming without hiccups. Concurrent job management is the foundation that all modern software is built on.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='projects-content-container'>
                    <div>
                        <img id='cg-demo' className='demo' src={coolGpt}/>
                    </div>
                    <div className='projects-content-text'>
                        <h1>GPT Summarizer</h1>
                        <h2>(<a href='https://github.com/GPTGDSC/cool-gpt-app'>Github</a>) Tech stack: Vite.js + React, Flask</h2>
                        <p>Harnesses the power of ChatGPT to summarize PDFs and raw text.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='projects-content-container'>
                    <h1>More work on <a href="https://github.com/peanutChowder">GitHub</a></h1>
                </div>
                
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