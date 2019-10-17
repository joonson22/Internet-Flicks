import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';


class NavBar extends React.Component {

    handleChange(e) {
        e.preventDefault();
        this.props.history.push('/search')
    }

    render() {
        return (
           this.props.navbar ? (
               <div className='nav-bar-container'>
                   <Link to='/movies'>
                        <img src="https://fontmeme.com/permalink/190911/42359bbf84e020be8f811016380611ac.png" alt="netflix-font" border="0"></img>
                   </Link>
                    {this.props.user ? (
                        <div className="nav-right">
                            <SearchContainer />
                            <h1>Welcome {this.props.user.username}</h1>
                            <button onClick={this.props.logout} className='nav-logout'>Logout</button>
                        </div>
                    ) : (
                        <Link to = 'login' className = 'splash-login-link'>Sign in</Link>
                    ) }
               </div>
           ) : ("")
        )
    }
}

export default NavBar;

