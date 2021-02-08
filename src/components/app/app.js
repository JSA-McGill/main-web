import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/index';
import Body from './body/index';
import Footer from './footer/footer'

import "./app.scss"

class App extends React.Component {
    render() {
        return (
            <div className={"app"} >
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default App;
