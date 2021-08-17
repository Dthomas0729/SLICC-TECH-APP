import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'


const SideNavData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaCogs />,
        cName: 'nav-text'
    },
    {
        title: 'Showcase',
        path: '/showcase',
        icon: <FaIcons.FaRegWindowRestore />,
        cName: 'nav-text'
    },
    {
        title: 'Get A Quote',
        path: '/getaquote',
        icon: <FaIcons.FaTag />,
        cName: 'nav-text'
    },
]

export default SideNavData