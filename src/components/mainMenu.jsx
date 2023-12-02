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
                <div>Messages</div>
            </a>
            <a className="disc l2">
                <div>Photos</div>
            </a>
            <a className="disc l3">
                <div>Profile</div>
            </a>
            <a className="disc l4">
                <div>Likes</div>
            </a>
            <a className="disc l5 toggle" onClick={handleOnMenuClick}>
                Menu
            </a>
        </nav>
    )
}

export default MainMenu