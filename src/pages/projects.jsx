import PropTypes from 'prop-types';
import { useEffect } from 'react';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

import Project from '../components/project';
import projectList from '../assets/projectsList';


const Projects = ({ menuOpen, setMenuOpen }) => {
    window.scrollTo(0, 0);

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