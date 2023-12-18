import { useState } from 'react';
import './mainMenu.scss'

const MainMenu = () => {
    const [menuOpen, setMenuOpen] = useState("close");

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

export default MainMenu