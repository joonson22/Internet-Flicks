import { combineReducers } from 'redux';
import popoutReducer from './popout_reducer'

const uiReducer = combineReducers({
    popout: popoutReducer
})

export default uiReducer;