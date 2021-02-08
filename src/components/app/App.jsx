import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/footer'

import "./app.scss"

export default function App () {
    return (
        <div className={"app"} >
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

