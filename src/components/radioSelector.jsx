import PropTypes from 'prop-types';

import './radioSelector.scss'

const RadioSelector = ({ setRadioSelected }) => {
    const handleRadioChange = ( e ) => {
        setRadioSelected(e.target.value)
    }
    return (
        <div>
            <div className="about-radio" onChange={handleRadioChange}>
                        
            <input name="about-radio" type="radio" id="about-software" className="about-radio__input" value='software' defaultChecked/>
            <label htmlFor="about-software" className="about-radio__label">Software</label>
            
            <input name="about-radio" type="radio" id="about-weightlifting" className="about-radio__input" value='weightlifting'/>
            <label htmlFor="about-weightlifting" className="about-radio__label">Weightlifting</label>	
            
            <input name="about-radio" type="radio" id="about-temp" className="about-radio__input" value='temp'/>
            <label htmlFor="about-temp" className="about-radio__label">temp</label>
            
            </div>
        </div> 
    )
}

RadioSelector.propTypes = {
    setRadioSelected: PropTypes.func.isRequired
}

export default RadioSelector