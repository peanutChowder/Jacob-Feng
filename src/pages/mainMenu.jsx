import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

import './mainMenu.css'

const MainMenu = ({ menuOpen, setMenuOpen }) => {
    

    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='oly-gif'></div>
        </div>
    )
}

MainMenu.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default MainMenu