import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const {isResponsive,setIsResponsive} = useState(false)
    return (
      <nav className="navbar"> 
        <h3 className= "logo">LuxLens <br></br><a className="name">Hope Shembe, 1918429</a></h3>
        <ul className={isResponsive? "nav-links-responsive": "nav-links"}
        onClick={() => setIsResponsive(false)}
        > 
        <Link to="/" className="home">
        <li>HOME</li>
        </Link>

        <Link to="/blogs" className="blogs">
        <li>BLOGS</li>
        </Link>

        <Link to="/design" className="design">
        <li>DESIGN</li>
        </Link>

        <Link to="/internetartwork" className="internetartwork">
        <li>INTERNET <br></br>ARTWORK</li>
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
