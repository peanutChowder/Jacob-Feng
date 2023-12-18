import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

const Projects = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

Projects.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Projects