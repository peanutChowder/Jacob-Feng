import PropTypes from 'prop-types';
import { useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

import Project from '../components/project';

import inventoryManagementApp from '../assets/inventoryTrackerDemo.gif'
import kesslerFuzzy from '../assets/kesslerFuzzyDemo.gif'
import concurrentJob from '../assets/concurrentJobManagerDemo.gif'
import coolGpt from '../assets/coolGptDemo.gif'

const Projects = ({ menuOpen, setMenuOpen }) => {
    window.scrollTo(0, 0);

    const projectList = [
        {
            id: 'itac-demo',
            name: 'Inventory Management App',
            gif: inventoryManagementApp,
            url: 'https://github.com/CMPUT301F23T29/agile-beast',
            techStack: 'Tech stack: Android Studio + Java, Firebase.',
            description: 'Built in an Agile team of 6. Inventory tracking made easy with features such as quick barcode scanning and item lookup on Amazon/Google.'
        },
        {
            id: 'kf-demo',
            name: 'Kessler Fuzzy System',
            gif: kesslerFuzzy,
            url: 'https://github.com/peanutChowder/XFC-fuzzy-agent',
            techStack: 'Tech stack: Python, Scikit-Fuzzy, EasyGA',
            description: 'Optimized with genetic algorithms. Uses fuzzy inference to maximize asteroid destruction, minimize collisions.'
        },
        {
            id: 'cj-demo',
            name: 'Concurrent command line',
            gif: concurrentJob,
            url: 'https://github.com/peanutChowder/Shell-Simulator',
            techStack: 'Tech stack: C++/C',
            description: 'Tackles the challenges of concurrent programming without hiccups. Concurrent job management is the foundation that all modern software is built on.'
        },
        {
            id: 'cg-demo',
            name: 'GPT Summarizer',
            gif: coolGpt,
            url: 'https://github.com/GPTGDSC/cool-gpt-app',
            techStack: 'Tech stack: Vite.js + React, Flask',
            description: 'Harnesses the power of ChatGPT to summarize PDFs and raw text.'
        },
    ]

    useEffect(() => {
        const { innerWidth: width, } = window
        if (width <= 830) {
            setMenuOpen("close")
        }
    }, [setMenuOpen])

    useEffect(() => {
        document.addEventListener('scroll', () => { console.log(document.documentElement.scrollTop) });
    })
    return (
        <div>
            <HomeButton />
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div id='projects-content'>
                {projectList.map((project) => {
                    return <Project
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        gif={project.gif}
                        url={project.url}
                        techStack={project.techStack}
                        description={project.description}
                    />
                })}
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