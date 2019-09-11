import React from 'react';
import {Link} from 'react-router-dom'

const Greetings = (props) => {
    const logged_in = () => (
        <div>
            <h1>{`Welcome ${props.user.username}`}</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    )

    const links = () => (
        <div className='greeting-container'>
            <div className='splash-signup'>
                <Link to='/signup' className='splash-signup-link'>Sign Up!</Link>
           
                <Link to='login' className='splash-login-link'>Sign in</Link>
            </div>
        </div>
    )

    return props.user ? logged_in() : links()
}

export default Greetings;