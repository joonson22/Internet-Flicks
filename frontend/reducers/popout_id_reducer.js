import { SET_POPOUT } from '../actions/popout_actions'

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_POPOUT:
            return action.id
        default:
            return state;
    }
}