export const RECEIVE_MYLIST = 'RECEIVE_MYLIST'
export const RECEIVE_ALL_MYLISTS = 'RECEIVE_ALL_MYLISTS'
export const REMOVE_MYLIST = "REMOVE_MYLIST"
import * as MylistUtil from '../util/mylist_api_utils';
const receveMylist = (mylist) => {
    return({
        type: RECEIVE_MYLIST,
        mylist
    })
} 

const removeMylist = (mylistId) => {
    return({
        type: REMOVE_MYLIST,
        mylistId
    })
}

const receiveMylists = (mylists) => {
    return({
        type: RECEIVE_ALL_MYLISTS,
        mylists
    })
}


export const fetchMylist = () => dispatch => {
    return MylistUtil.fetchMylist().then(mylists => dispatch(receiveMylists(mylists)))
}

export const createMylist = (mylist) => dispatch => {
    return MylistUtil.createMylist(mylist).then(mylist => dispatch(receveMylist(mylist)))
}

export const deleteMylist = (id) => dispatch => {
    return MylistUtil.deleteMylist(id).then(mylistId => dispatch(removeMylist(mylistId)))
}

