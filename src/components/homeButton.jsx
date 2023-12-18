import { useNavigate } from 'react-router-dom';

import "./homeButton.css"

const HomeButton = () => {
    const navigate = useNavigate()
    return (
        <div className="home-wrapper" onClick={() => navigate("/")}>
            <i className="gg-home-alt"></i>
        </div>
        
    )
}

export default HomeButton