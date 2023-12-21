import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

const Projects = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='projects-content'>
            <section>
                <h1>slide 1</h1>
            </section>
            <section>
                <h1>slide 2</h1>
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