import React from 'react';
import {Link} from 'react-router-dom'

const Greetings = (props) => {
    const logged_in = () => (
        <div className='greeting-index-container'>
            <h1>{`Welcome ${props.user.username}`}</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    )

    const links = () => (
        <div className='greeting-container'>
            <div className='background-splash'></div>
            <div className='splash-text'>
                <h1>The place to be for internet flicks of the century</h1>
                <p>Take a journey back in time to cult classics</p>
                <Link to='/signup' className='signup-link'>Sign up for free</Link>
            </div>
        </div>
    )

    return props.user ? logged_in() : links()
}

export default Greetings;