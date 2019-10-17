import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'
import NavBarContainer from './navbar/nav_bar_container'
import MoviesContainer from './movies/movies_container'
import MovieShowContainer from './movies/movie_show_container';
import SearchIndexContainer from './search/search_index_container';
import {Route, Switch} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Page from './404/404'

import { withRouter } from 'react-router'
const NavWithRouter = withRouter(NavBarContainer);
const App = () => (
    <div>

        <NavBarContainer />
        <Switch>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <ProtectedRoute exact path='/movies' component={MoviesContainer} />
            <ProtectedRoute exact path='/search' component={SearchIndexContainer} />
            <ProtectedRoute exact path='/movies/:movieId' component={MoviesContainer} />
            <ProtectedRoute exact path='/movie/:movieId' component={MovieShowContainer} />
            <Route exact path="/" component={GreetingContainer} />
            <Route component={Page} />
        </Switch>
    </div>
)

export default App;