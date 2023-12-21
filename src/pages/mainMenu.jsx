import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';

import './mainMenu.css'

const MainMenu = ({ menuOpen, setMenuOpen }) => {
    

    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='mainpage-content'>
                <div id='mainpage-oly-gif-container'  className='fi-element fade-in'>
                    <div id='mainpage-oly-gif'></div>
                    <em>The lift that brought home the podium. Hover to watch.</em>
                </div>
                <div id='mainpage-content-text' className='fi-element fade-in'>
                    <h1>Jacob Feng</h1>
                    <h2 className='fi-element fade-in'>Seeking Summer 2024 8-month internships</h2>
                    <p className='fi-element fade-in'>Software Engineering @ University of Alberta</p>
                    <p className='fi-element fade-in'>Olympic Weightlifter</p>
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