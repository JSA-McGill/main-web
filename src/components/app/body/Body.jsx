import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import About from './about/About';
import Events from './events/Events';
import Landing from './landing/Landing';
import "./body.scss"

//  React Router

export default function Body (){
    return (
        <div className="body">
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>

                <Route exact path="/events">
                    <Events/>
                </Route>

                <Route exact path="/about">
                    <About/>
                </Route>
            </Switch>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};