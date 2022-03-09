import React from 'react';
import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <Link to={'/'}>
        <div className='navbar'>

            <FaCoins style={{color:"#6900ff",marginRight:"7px"}}/>  
            <h3 style={{color:"#f4f4f4"}}>Coin <span style={{color:"#6900ff"}}>Search</span></h3>

        </div>
        </Link>
    );
};

export default Navbar;