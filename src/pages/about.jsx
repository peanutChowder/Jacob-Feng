import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import overviewImg from '../assets/overview.jpg'
import weightliftImg from '../assets/weightlifting.jpg'

import CircleMenu from '../components/circleMenu';
import HomeButton from '../components/homeButton';
import RadioSelector from '../components/radioSelector';

import './about.css'

const About = ({ menuOpen, setMenuOpen }) => {
    const [radioSelected, setRadioSelected] = useState('software')
    var selectedContent

    useEffect(() => {
        const { innerWidth: width, } = window
        if (width <= 600) {
            setMenuOpen("close")
        }
    }, [setMenuOpen])

    if (radioSelected == 'software') {
        selectedContent = (
            <div id='about-content'>
                <div>
                    <img id='about-img' src={overviewImg}/>
                </div>
                <div id='about-content-text'>
                    <p>
                        Hello, I&apos;m Jacob!<br></br>
                        In 2019, I took a programming class elective.<br></br>
                        Falling out of love with the strict memorization of Biology, I was falling in love with the creative aspect of Software.<br></br>  
                        I changed my major to pursue my desire to create.
                    </p>       
                </div>
            </div>
        )
    } else if (radioSelected == 'weightlifting') {
        selectedContent = (
            <div id='about-content'>
                <div>
                    <img id='about-img' src={weightliftImg}/>
                </div>
                <div id='about-content-text'>
                    <p>
                        I discovered weightlifting from the Tokyo Olympics.<br></br>
                        Impressed by the strength and aesthetics, I dove in.<br></br>
                        I qualified for Provincial Championships completely self-taught.<br></br>
                        Realizing that I have a shot at making it Nationally, I decided to train seriously.
                    </p>       
                </div>
            </div>
        )
    } else if (radioSelected == 'this-site') {
        selectedContent = (
            <div id='about-content'>
                <div id='about-img-placeholder'>
                </div>
                <div id='about-content-text'>
                    <p>
                        This site was built from scratch using React + Vite.js.<br></br>
                        I learned React thanks to the FullStackOpen course, as countless other YouTube tutorials.
                        If you have any feedback or ideas, I would love to hear them!<br></br>
                        <a href='https://github.com/peanutChowder/Jacob-Feng'>GitHub</a>
                        <br></br>
                        Hope you enjoyed your visit!
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