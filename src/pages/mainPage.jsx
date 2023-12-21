import PropTypes from 'prop-types';

import CircleMenu from '../components/circleMenu';
import ScrollingDisplay from '../components/scrollingDisplay';

import './mainPage.css'

const MainPage = ({ menuOpen, setMenuOpen }) => {
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
                    <div id='scrolling-container'>
                        <ScrollingDisplay/>
                    </div>
                    <h2>Seeking Summer 2024 8-month internships</h2>        
                </div>
            </div>
            
        </div>
    )
}

MainPage.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default MainPage