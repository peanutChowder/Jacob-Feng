import PropTypes from 'prop-types';
import { useState } from 'react';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';
import RadioSelector from '../components/radioSelector';

import './about.css'

const About = ({ menuOpen, setMenuOpen }) => {
    const [radioSelected, setRadioSelected] = useState('overview')
    var selectedContent

    if (radioSelected == 'overview') {
        selectedContent = (
            <div id='about-content'>
                <div id='about-img'></div>
                <div id='about-content-text'>
                    <p>
                        Hello, I&apos;m Jacob!<br></br>
                        In 2020, I realized Biology wasn&apos;t for me.<br></br>
                        So I turned my attention to something that better suited my personality -<br></br>
                        Software Engineering.          
                    </p>       
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='about-content-container'>
                {selectedContent}
                <RadioSelector setRadioSelected={setRadioSelected}/>
            </div>
            
        </div>
    )
}

About.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default About