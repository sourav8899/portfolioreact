import React, { useState } from 'react'
import"./header.css"
const Header = () => {
    const[Toggle,showMenu]=useState(false)
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>sourav</a>
            <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__items'>
                        <a href="#home" className='nav__link active-link'>
                            <i className='uil uil-estate nav__Icon'></i>
                            Home 
                        </a>
                        <a href="#projects" className='nav__link'>
                            <i className='uil uil-user nav__Icon'></i> Projects 
                        </a>
                        <a href="#skills" className='nav__link'>
                            <i className='uil uil-book-reader nav__Icon'></i> Skills
                        </a>
                        <a href="#contact me" className='nav__link'>
                            <i className='uil uil-confused nav__Icon'></i> About me
                        </a>
                       
                    </li>
                </ul>
                <i className='uil uil-times nav__close'onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}><i class='uli uil-apps '></i></div>
        </nav>
    </header>
  )
}

export default Header