import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

const Fun = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

Fun.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Fun