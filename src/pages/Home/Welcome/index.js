import React from 'react'
import background from '../../../images/home_welcome.jpg'

import './styles.css'

const Welcome = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${background})` }}
            className='welcome-container'
        >
            <h1 className='welcome-header'>
                Web Applications & Software for Small Businesses</h1>

            <p className='welcome-body'>We build full stack web applications for small and startup businesses to make it cost effective for them to own software that solves company problems.</p>

            <div className='welcome-actions'>

                    <button className='getaquote'>Get a Quote</button>
                    <button className='viewservices'>View Services</button>

            </div>
        </div>
    )
}

export default Welcome
