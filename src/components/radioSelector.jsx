import './radioSelector.scss'

const RadioSelector = () => {
    return (
        <div>
            <div className="about-radio">
                        
            <input name="about-radio" type="radio" id="about-overview" className="about-radio__input"/>
            <label htmlFor="about-overview" className="about-radio__label">Overview</label>
            
            <input name="about-radio" type="radio" id="about-weightlifting" className="about-radio__input" checked/>
            <label htmlFor="about-weightlifting" className="about-radio__label">Weightlifting</label>	
            
            <input name="about-radio" type="radio" id="about-temp" className="about-radio__input"/>
            <label htmlFor="about-temp" className="about-radio__label">temp</label>
            
            </div>
        </div> 
    )
}

export default RadioSelector