import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/sonali-keshri-322875225" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Sonali-keshri" target="_blank"><BsGithub/></a>
      <a href="https://www.instagram.com/mahi.ra45/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials
