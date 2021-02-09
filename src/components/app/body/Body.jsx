import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom'

import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
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
                
                <Route exact path="/blog">
                    <Blog/>
                </Route>
                
                <Route exact path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};