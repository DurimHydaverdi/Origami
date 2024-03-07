import React from 'react'
import './Services.css'
import service from '../Assets/our-service.png'

const Services = () => {
  return (
    <div className='our-service'>
      <h1>Our Services</h1>
      <hr className='services-hr'/>
      <div className="services">
        <img src={service} alt='Our Service'/>
        <p>
        • Recruitment
        <hr />
        • Tax advising
        <hr />
        • Contract negotiating
        <hr />
        • Long term project plan.
        </p>
      </div>
    </div>
  )
}

export default Services
