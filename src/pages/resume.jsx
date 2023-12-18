import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';

const Resume = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

Resume.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Resume