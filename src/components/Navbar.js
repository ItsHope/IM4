import React from 'react'


export const Navbar = () => {
    return (
        <div className="sum">
            <h1 className="logo">
               LuxLens
            </h1>
            <nav className= "item">
                <ul className= "ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/design">Design</Link>
                    </li>
                    <li>
                        <Link to="/internetartwork">Internet Artwork</Link>
                    </li>

                        

                </ul>

            </nav>
        </div>
    )
}
