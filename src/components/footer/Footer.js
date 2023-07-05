import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerResponsiveContainer'>
        <div className='footerHireContainer '>
          <p>Let's connect and discuss how I can bring value to your organization and contribute to its growth and success.</p>
          <div>
            <a href='mailto:w3b.dev.rishu@gmail.com' className='footerHireMeBtn'>Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer