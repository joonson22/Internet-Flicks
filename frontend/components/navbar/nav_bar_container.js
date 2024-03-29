import NavBar from './nav_bar';
import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'


const msp = (state, ownProps) => {
   
    return ({
        user: state.entities.users[state.session.id],
        navbar: state.ui.navbar,
       
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
}

export default connect(msp,mdp)(NavBar)