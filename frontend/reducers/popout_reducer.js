import {OPEN_POPOUT, CLOSE_POPOUT} from '../actions/popout_actions'

export default (state = false, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_POPOUT:
            return true;
        case CLOSE_POPOUT:
            return false;
        default:
            return state;
    }
}