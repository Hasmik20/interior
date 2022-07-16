import React, { useState, useRef, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom'

import { FaBars } from 'react-icons/fa';
import {navLinks} from './navList'
import '../../styles/Nav.scss'

import Logo from '../../util/img/logo.jpg'

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    // for finding dynamic height for ul li (links)
    const linkHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linkHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  },[showLinks])
  return (
    <nav>
     <div className='container'>
      <div className='nav-center'>
        <div className='nav-logo'>
          <Link to='/'>
           <img src={Logo} alt="logo"className='logo' />
          </Link>
        </div>
        <div className='nav-header'>
          <button className='nav-toggle'
           onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
       
        <div className='links-container' ref={linksContainerRef} >
          <ul className='links' ref={linksRef} >
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} >
                  <NavLink to={ url } > { text }</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
       
      </div>
    </div>
    </nav>
  )
}

export default Nav
