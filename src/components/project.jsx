import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const Project = ({ id, gif}) => {
    return (
        <section>
        <div className='projects-content-container fi-element fade-in'>
            <div>
                <img id={id} className='demo' src={gif}/>
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
    )
}

Project.propTypes = {
    id: PropTypes.string.isRequired,
    gif: PropTypes.object.isRequired
}

export default Project