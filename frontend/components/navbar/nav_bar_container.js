import NavBar from './nav_bar';
import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'


const msp = state => {
    return ({
        user: state.entities.users[state.session.id],
        navbar: state.ui.navbar,
        user: state.session.id
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout())
    })
}

export default connect(msp,mdp)(NavBar)