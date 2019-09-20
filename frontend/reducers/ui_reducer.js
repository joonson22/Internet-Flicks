import { combineReducers } from 'redux';
import popoutReducer from './popout_reducer'
import navbarReducer from './navbar_reducer'

const uiReducer = combineReducers({
    popout: popoutReducer,
    navbar: navbarReducer
})

export default uiReducer;