import React from 'react';
import { Link } from 'react-router-dom'
class Page extends React.Component {

    render() {
        // let i = 'http://localhost:3000/#/'
        return(
            <div className='error-container'>
                <h1>Internet Flicks Error - Page Not Found</h1>
                <p>We were unable to find that page.</p>
                <p>Please go to the Internet Flicks home page by clicking the button below</p>
                <Link to='/' className='home-link'>Internet Flicks Home</Link>
            </div>
        )
    }
}

export default Page;