import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewPost from './NewPost';
import PostDetails from './PostDetails';
import HomePage from './HomePage';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/new">
                <NewPost />
            </Route>
            <Route exact path="/:postId">
                <PostDetails />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route>
                <p> Error 404: Page could not be found</p>
            </Route>
        </Switch>

    )
}

export default Routes;