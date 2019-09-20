import React from 'react';
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'

class NavBar extends React.Component {

    render() {
        return (
           this.props.navbar ? (
               <div className='nav-bar-container'>
                   <Link to='/movies'>
                        <img src="https://fontmeme.com/permalink/190911/42359bbf84e020be8f811016380611ac.png" alt="netflix-font" border="0"></img>
                   </Link>
                    {this.props.user ? (
                        <div className="nav-right">
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

// const NavBar = (props) => (
//     props.navbar ? (
//         <div className='nav-bar-container'>
//             <a href="#"><img src="https://fontmeme.com/permalink/190911/42359bbf84e020be8f811016380611ac.png" alt="netflix-font" border="0"></img></a>
//             {this.props.user ? (
//                 <button>
//                     Logout
//                 </button>
//             ) : (
//                 <Link to='login' className='splash-login-link'>Sign in</Link>
//             )}
//         </div>
//     ) : ("")

// )

// export default NavBar;