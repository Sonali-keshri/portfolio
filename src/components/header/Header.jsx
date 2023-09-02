import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
// import ME from '../../assests/header.jpg'
import ME from "../../assests/img/edited.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Sonali Keshri</h1>
        <h5 className='text-light'>Frontend | ReactJs Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="Homeimg"/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
