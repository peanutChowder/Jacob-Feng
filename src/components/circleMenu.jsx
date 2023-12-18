import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './circleMenu.scss'

const CircleMenu = ({ menuOpen, setMenuOpen }) => {
    const navigate = useNavigate()
    const handleOnMenuClick = () => {
        if (menuOpen == "open") {
            setMenuOpen("close");
        } else {
            setMenuOpen("open") 
        }
    }

    return (
        <nav className={`top-right ${menuOpen}`}>
            <a className="disc l1" onClick={() => {navigate("/resume")}}>
                <div>Resume</div>
            </a>
            <a className="disc l2" onClick={() => {navigate("/projects")}}>
                <div>Projects</div>
            </a>
            <a className="disc l3" onClick={() => {navigate("/fun")}}>
                <div>Fun</div>
            </a>

            <a 
            className="disc l4 toggle" 
            onClick={handleOnMenuClick}>
                Menu
            </a>
        </nav>
    )
}

CircleMenu.propTypes = {
    menuOpen: PropTypes.string,
    setMenuOpen: PropTypes.func.isRequired
}

export default CircleMenu