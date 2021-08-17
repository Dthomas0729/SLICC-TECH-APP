import React, {useState} from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

import SideNavData from './sideNavData'
import './style.css'
import Home from '../pages/Home/index'
import Services from '../pages/Services/index'
import GetAQuote from '../pages/GetAQuote/index'
import Showcase from '../pages/Showcase/index'


function SideNav() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar) //toggles between True & False

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>

                    {SideNavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Switch>
                <Route  path='/' exact component={Home}/>
                <Route path='/services' component={Services}/>
                <Route path='/showcase' component={Showcase}/>
                <Route path='/getaquote' component={GetAQuote}/>
            </Switch>

            </IconContext.Provider>
        </>
    )
}

export default SideNav
