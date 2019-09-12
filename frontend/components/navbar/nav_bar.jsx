import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => (
    <div className='nav-bar-container'>
        <a href="#"><img src="https://fontmeme.com/permalink/190911/42359bbf84e020be8f811016380611ac.png" alt="netflix-font" border="0"></img></a>
        <Link to='login' className='splash-login-link'>Sign in</Link>
    </div>

)

export default NavBar;