import React from 'react'
import background from '../../../images/home_welcome.jpg'

import './styles.css'

const Welcome = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${background})` }}
            className='welcome-container'
        >
            <h1>SLICC TECH</h1>
        </div>
    )
}

export default Welcome
