import './radioSelector.scss'

const RadioSelector = () => {
    return (
        <div>
            <div className="hidden-toggles">
                        
            <input name="coloration-level" type="radio" id="coloration-low" className="hidden-toggles__input"/>
            <label htmlFor="coloration-low" className="hidden-toggles__label">Low</label>
            
            <input name="coloration-level" type="radio" id="coloration-medium" className="hidden-toggles__input" checked/>
            <label htmlFor="coloration-medium" className="hidden-toggles__label">Medium</label>	
            
            <input name="coloration-level" type="radio" id="coloration-high" className="hidden-toggles__input"/>
            <label htmlFor="coloration-high" className="hidden-toggles__label">High</label>
            
            <input name="coloration-level" type="radio" id="coloration-striking" className="hidden-toggles__input"/>
            <label htmlFor="coloration-striking" className="hidden-toggles__label">Striking</label>
            
            </div>
        </div> 
    )
}

export default RadioSelector