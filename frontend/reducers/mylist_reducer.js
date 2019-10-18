import {RECEIVE_MYLIST} from '../actions/mylist_actions';

const mylistReducer = (oldState = {}, action) => {
    Object.freeze();
    let newState;

    switch (action.type) {
        case RECEIVE_MYLIST:
            return action.mylist;
        default:
            return oldState;
    }
}

export default mylistReducer