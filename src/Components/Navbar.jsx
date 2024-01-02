import React from 'react';
import {signOut} from "firebase/auth";
import { auth } from '../firebase';


const Navbar = () => {
    return (
        <div className='navbar'>
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img src='https://media.istockphoto.com/id/482189340/photo/portrait-of-girl.jpg?s=612x612&w=0&k=20&c=-yarEEKOPTP33MVl8c8FRuTvOt73XNW17WBCLIhweiw=' alt="" />
          <span>Johan</span>
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>    
    );
}

export default Navbar;