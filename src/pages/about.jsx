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
            <div id='about-content-info'>
                <div id='about-img'></div>
            </div>
        )
    }
    
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='about-content'>
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