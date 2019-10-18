export const RECEIVE_MYLIST = 'RECEIVE_MYLIST'
import * as MylistUtil from '../util/mylist_api_utils';
const receveMylist = (mylist) => {
    return({
        type: RECEIVE_MYLIST,
        mylist
    })
} 

export const fetchMylist = (id) => dispatch => {
    return MylistUtil.fetchMylist(id).then(mylist => dispatch(receveMylist(mylist)))
}