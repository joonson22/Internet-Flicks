import { SEARCH_TEXT } from '../actions/search_action';

export default (state = '', action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_TEXT:
            return action.search
        default:
            return state;
    }
}