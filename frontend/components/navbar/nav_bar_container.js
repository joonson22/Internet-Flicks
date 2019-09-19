import NavBar from './nav_bar';
import {connect} from 'react-redux'


const msp = state => {
    return ({
        user: state.entities.users[state.session.id],
        navbar: state.ui.navbar,
        user: state.session
    })
}

export default connect(msp)(NavBar)