import { useState } from 'react';

import CircleMenu from '../components/circleMenu';


const MainMenu = () => {
    const [menuOpen, setMenuOpen] = useState("close");

    return (
        <div>
            <CircleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

export default MainMenu