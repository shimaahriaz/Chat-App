import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img src='https://media.istockphoto.com/id/482189340/photo/portrait-of-girl.jpg?s=612x612&w=0&k=20&c=-yarEEKOPTP33MVl8c8FRuTvOt73XNW17WBCLIhweiw=' alt="" />
          <span>Johan</span>
          <button>logout</button>
        </div>
      </div>    
    );
}

export default Navbar;