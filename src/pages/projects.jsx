import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

import './projects.css'

import inventoryManagementApp from '../assets/inventoryTrackerDemo.gif'

const Projects = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='projects-content'>
            <section>
                <div id='inventory-tracker-app-content'>
                    <div>
                        <img className='demo' src={inventoryManagementApp}/>
                    </div>
                    <div>
                        <h1>Inventory Management App</h1>
                        <h2>Tech stack: Android Studio + Java, Firebase</h2>
                        <p>Built in an Agile team of 6. Inventory tracking made easy with features such as quick barcode scanning and item lookup on Amazon/Google.</p>
                    </div>
                   
                </div>
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