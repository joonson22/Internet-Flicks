import NavBar from './nav_bar';
import {connect} from 'react-redux'

const msp = state => {
    return ({
        user: state.entities.users[state.session.id]
    })
}

export default connect(msp)(NavBar)