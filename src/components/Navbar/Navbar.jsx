import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'
const Navbar = () => {
    const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={assets.logo} alt="" />
        </div>
            <ul className='navbar-menu'>
                <Link to='/' className={menu === 'home' ? 'active' : ''}  onClick={() => setMenu('home')}>home</Link>
                <a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>menu</a>
                <a href='#app-download' className={menu === 'mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}>mobile-app</a>
                <a href='#footer' className={menu === 'contact us' ? 'active' : ''} onClick={() => setMenu('contact us')}>contact us</a>
            </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className='navbar-search-icon' />
            <div className="navbar-basket-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
