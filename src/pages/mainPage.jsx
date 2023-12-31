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
                    <div><em>The lift that brought home the podium. <span id='gif-hover-hint'>Hover to watch.</span></em></div>
                    
                </div>
                <div id='mainpage-content-text' className='fi-element fade-in'>
                    <h1>Jacob Feng</h1>
                    <div id='scrolling-container'>
                        <ScrollingDisplay/>
                    </div>
                    <h2>Seeking Summer 2024 8-month internships</h2>   
                    <h2><a href='https://github.com/peanutChowder'>GitHub</a> | <a href='https://www.linkedin.com/in/jacobsolives/'>LinkedIn</a></h2>    
                    <p>Built in React.js</p>
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