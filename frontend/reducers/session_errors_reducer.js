import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}