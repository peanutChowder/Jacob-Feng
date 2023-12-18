import PropTypes from 'prop-types';
import './circleMenu.scss'

const CircleMenu = ({ menuOpen, setMenuOpen }) => {

    const handleOnMenuClick = () => {
        if (menuOpen == "open") {
            setMenuOpen("close");
        } else {
            setMenuOpen("open") 
        }
    }

    return (
        <nav className={`top-right ${menuOpen}`}>
            <a className="disc l1">
                <div>Resume</div>
            </a>
            <a className="disc l2">
                <div>Projects</div>
            </a>
            <a className="disc l3">
                <div>Sport</div>
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