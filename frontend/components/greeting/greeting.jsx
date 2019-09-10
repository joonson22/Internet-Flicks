import React from 'react';
import {Link} from 'react-router-dom'

const Greetings = (props) => {
    const logged_in = () => (
        <div>
            <h1>{`Welcome ${props.user.username}`}</h1>
            <button onClick={props.logout()}>Logout</button>
        </div>
    )

    const links = () => (
        <div>
            <Link to='/signup'>Sign Up!</Link>
            <Link to='login'>Login!</Link>
        </div>
    )

    return props.user ? logged_in() : links()
}

export default Greetings;