import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

const Resume = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

Resume.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Resume