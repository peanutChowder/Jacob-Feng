import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';
import Timeline from '../components/timeline';

import "./resume.css"

const Resume = ({ menuOpen, setMenuOpen }) => {
    window.scrollTo(0, 0);
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='resume-content'>
                <Timeline/>
            </div>
        </div>
    )
}

Resume.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Resume