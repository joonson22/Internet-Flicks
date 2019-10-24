import { combineReducers } from 'redux';
import popoutReducer from './popout_reducer';
import navbarReducer from './navbar_reducer';
import searchReducer from './search_reducer';
import popoutIdReducer from './popout_id_reducer';

const uiReducer = combineReducers({
    popout: popoutReducer,
    navbar: navbarReducer,
    search: searchReducer,
    popoutId: popoutIdReducer
})

export default uiReducer;