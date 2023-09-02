import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <div>
      <nav>
        <a href='#' onClick={()=>setActiveNav("#")}className={activeNav === '#' ? 'active': ''}><AiOutlineHome className='nav-icon'/></a>
        <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav === '#about' ? 'active': ''}  ><AiOutlineUser className='nav-icon'/></a>
        <a href='#experience'  onClick={()=>setActiveNav("#experience")} className={activeNav === '#experience' ? 'active': ''} ><BiBookAlt className='nav-icon'/></a>
        <a href='#portfolio'  onClick={()=>setActiveNav("#portofolio")} className={activeNav === '#portofolio' ? 'active': ''} ><RiServiceLine className='nav-icon'/></a>
        <a href='#contact'  onClick={()=>setActiveNav("#contact")} className={activeNav === '#contact' ? 'active': ''} ><BiMessageSquareDetail className='nav-icon'/></a>
      </nav>

    </div>
  )
}

export default Nav
