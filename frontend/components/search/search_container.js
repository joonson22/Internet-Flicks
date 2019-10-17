import { connect } from 'react-redux';
import Search from './search';
import { showNavbar } from '../../actions/navbar_action'
import { withRouter } from "react-router";
import { updateSearch } from '../../actions/search_action';

const msp = state => {
    // debugger
    return({
        search: state.ui.search,
        
    })
}

const mdp = dispatch => {
    return({
        showNavbar: () => dispatch(showNavbar()),
        updateSearch: (search) => dispatch(updateSearch(search))
    })
}

export default withRouter(connect(msp,mdp)(Search))