import React from 'react';
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <div className="navbar">
  <div className="navbar-start">
    
    <a className="logo">
        <img src={logo} alt="" />
    </a>
  </div>

  <div className="navbar-end btn-list">
   <button className="">Home</button>
   <button className="">Flashcard</button>
   <button className="">Contact</button>
   <button className="">FAQ</button>
   <button className="login-btn">login</button>
  
  </div>
</div>
        </div>
    );
};

export default Header;