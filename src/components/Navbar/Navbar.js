import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const {isResponsive,setIsResponsive} = useState(false)
    return (
      <nav className="navbar"> 
        <h3 className= "logo">LuxLens</h3>
        <ul className={isResponsive? "nav-links-responsive": "nav-links"}
        onClick={() => setIsResponsive(false)}
        > 
        <Link to="/" className="home">
        <li>Home</li>
        </Link>

        <Link to="/blogs" className="blogs">
        <li>Blogs</li>
        </Link>

        <Link to="/design" className="design">
        <li>Design</li>
        </Link>

        <Link to="/internetartwork" className="internetartwork">
        <li>InternetArtwork</li>
        </Link>
        </ul>
        <button className="responsive-menu-icon"
        onClick={() => setIsResponsive(!isResponsive)}
        >
            {isResponsive ?
            (
            <i className="fas fa-times"></i> 
            ) : 
            (
            <i className="fas fa-bars"></i>
            )}
        </button>
      </nav>
    )
}

export default Navbar
