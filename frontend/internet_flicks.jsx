import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {login,signup} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.current_user) {
        const preloadedState = {
            entities: {
                users: {[window.current_user.id]: window.current_user}
            },
            session: {
                id: window.current_user.id
            }
        }
        store = configureStore(preloadedState);
        delete window.current_user;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login
    window.signup = signup
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})