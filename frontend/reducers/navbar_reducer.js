import { SHOW_NAVBAR, HIDE_NAVBAR} from '../actions/navbar_action';

export default (state = true, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SHOW_NAVBAR:
            return true;
        case HIDE_NAVBAR:
            return false;
        default:
            return state;
    }
}