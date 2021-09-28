import React from 'react'
import servicesImage from '../../images/services-pic.jpg'
import './styles.css'

function Services() {
    return (
        <div className='services'>
            <div className='title-card'>
                <h1>Services</h1>
                <img alt='services' src={servicesImage} />

            </div>
        </div>
    )
}

export default Services;
