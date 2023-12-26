import './radioSelector.scss'

const RadioSelector = () => {
    return (
        <div>
            <div className="about-radio">
                        
            <input name="coloration-level" type="radio" id="coloration-low" className="about-radio__input"/>
            <label htmlFor="coloration-low" className="about-radio__label">Overview</label>
            
            <input name="coloration-level" type="radio" id="coloration-medium" className="about-radio__input" checked/>
            <label htmlFor="coloration-medium" className="about-radio__label">Sport</label>	
            
            <input name="coloration-level" type="radio" id="coloration-high" className="about-radio__input"/>
            <label htmlFor="coloration-high" className="about-radio__label">Campus</label>
            
            </div>
        </div> 
    )
}

export default RadioSelector