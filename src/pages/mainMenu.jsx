import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';


const MainMenu = ({ menuOpen, setMenuOpen }) => {
    

    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

MainMenu.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default MainMenu