import React from 'react';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">Left</div>
        <div className="right">
            <ul>Home</ul>
            <ul>Log In</ul>
            <ul>Log Out</ul>
        </div>
    </div>
  )
}

export default Navbar
