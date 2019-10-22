import {RECEIVE_MYLIST, REMOVE_MYLIST} from '../actions/mylist_actions';

const mylistReducer = (oldState = {}, action) => {
    Object.freeze();
    let newState;

    switch (action.type) {
        case RECEIVE_MYLIST:
            return Object.assign({}, oldState, { [action.mylist.id]: action.mylist });
        case REMOVE_MYLIST:
            newState = Object.assign({}, oldState);
            delete newState[action.mylistId];
            return newState;
        default:
            return oldState;
    }
}

export default mylistReducer