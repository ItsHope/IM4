import React, {useState} from 'react'
import { Link } from "react-router-dom"

 const Header = () => {
    const [sidebar,setSidebar] = useState(false)
    return (
        <>

        <h1>Pls work</h1>
          <header className="header">
              <div className="container flex">
                  <div className="logo">

                      <img src="assets/logo.png" alt=""/>
                      <nav className="nav">

                          <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>

                              
                                  <li><Link to="/">Home</Link></li>
                                  <li><Link to="/pages">Pages</Link></li>
                                  <li><Link to="/blogs">Blogs</Link></li>
                                  <li><Link to="/about">About</Link></li>
                                  

                            
                          </ul>

                          <div>
                              <button className="navbar-items-icon"> </button>
                          </div>

                      </nav>
                  </div>
              </div>
          </header>
        </>
    )
}
export default Header