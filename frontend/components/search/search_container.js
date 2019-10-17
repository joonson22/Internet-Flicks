import { connect } from 'react-redux';
import Search from './search';
import { showNavbar } from '../../actions/navbar_action'

const msp = state => {
    return({

    })
}

const mdp = dispatch => {
    return({
        showNavbar: () => dispatch(showNavbar())
    })
}

export default connect(msp,mdp)(Search)