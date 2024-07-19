import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

const Navbar = () => {
    // THIS IS TO CHANGE THE UNDERLINE ON CLICK FOR THE MENU 
    const [menu, setMenu] = useState('home')

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      {/* CREATED A LIST FOR THE NAVBAR MENU */}
      <ul className="navbar-menu">
        {/* CREATED A ACTIVE ON CLICK FOR WHEN USERS SWITCH TABS */}
      <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
      <li onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</li>
      <li onClick={()=>setMenu('mobile')} className={menu==='mobile'?'active':''}>Mobile</li>
      <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact us</li>
      </ul>
      {/* PUT THE SEARCH AND BASKET ICONS IN A DIV TO HAVE IT SET TO THE RIGHT OF THE SCREEN */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        {/* CREATED A BUTTON FOR SIGN IN */}
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
