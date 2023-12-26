import PropTypes from 'prop-types';
import { useState } from 'react';

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';
import RadioSelector from '../components/radioSelector';

import './about.css'

const Fun = ({ menuOpen, setMenuOpen }) => {
    const [radioSelected, setRadioSelected] = useState('overview')
    
    return (
        <div>
            <HomeButton/>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div id='about-content'>
                <RadioSelector setRadioSelected={setRadioSelected}/>
            </div>
            
        </div>
    )
}

Fun.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default Fun