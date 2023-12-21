import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

import './mainMenu.css'

const MainMenu = ({ menuOpen, setMenuOpen }) => {
    

    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='mainpage-content'>
                <div id='mainpage-oly-gif-container'>
                    <div id='mainpage-oly-gif'></div>
                    <em>The lift that brought home the podium. Hover to watch.</em>
                </div>
                <div id='mainpage-content-text'>
                    <h1>Jacob Feng</h1>
                    <h2>Seeking Summer 2024 8-month internships</h2>
                    <p>Software Engineering @ University of Alberta</p>
                    <p>Olympic Weightlifter</p>
                </div>
            </div>
            
        </div>
    )
}

MainMenu.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default MainMenu