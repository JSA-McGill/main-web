import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import Header from './header/Header';
import Body from './body/Body';


import "./app.scss"

export default function App () {
    return (
        <Router>
        <div className={"app"} >
            <Header/>
            <Body/>
        </div>
        </Router>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

