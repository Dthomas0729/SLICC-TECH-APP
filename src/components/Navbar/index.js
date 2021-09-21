import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { GrTechnology } from 'react-icons/gr'
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import SideNav from "../SideNav";
import Button from "../Button/index";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        <GrTechnology className='navbar-icon' />
                        SLICC TECH
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/getaquote' className='nav-links'>
                                Quotes
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                                </Link>
                            ) : (
                                <Link to='sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>

                </div>
                
            </div>
        </>
        
    )
}

export default Navbar
