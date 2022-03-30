import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul >
                      <li className="menu-item">
                        <Link to='/test1' href="#" className="menu-link">
                            Test1
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/test2' href="#" className="menu-link">
                            Test2
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to='/test3' href="#" className="menu-link">
                            Test3
                        </Link>
                      </li>
                    </ul>
                </div>  
            </nav>
        </>
    )
}

export default Navbar
