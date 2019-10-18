import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import mylistReducer from './mylist_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    mylist: mylistReducer
})

export default entitiesReducer;