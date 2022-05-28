import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <h1 className="logo">
               LuxLens
            </h1>
            <nav className= "item">
                <ul className= "ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}
