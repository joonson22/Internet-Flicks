import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'
import {Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
const App = () => (
    <div>
        <header>
            <a href="#"><img src="https://fontmeme.com/permalink/190911/42359bbf84e020be8f811016380611ac.png" alt="netflix-font" border="0"></img></a>
            <GreetingContainer />
        </header>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
)

export default App;