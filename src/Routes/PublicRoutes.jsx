import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Home'
import RepoDetails from '../Components/RepoDetails';
import Followers from '../Components/Followers';
import FollowersRepo from '../Components/FollowersRepo'

export default function Routing(props) {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/details/:id"  render={(props) => <RepoDetails {...props} /> }  />
            <Route path="/followers" exact render={(props) => <Followers {...props} /> }  />
            <Route path="/followers/repo/:name" render={(props) => <FollowersRepo {...props} /> }  />
            <Route render={() => <h3>Page not found</h3>} />
        </Switch>
    );
}