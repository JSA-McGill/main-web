import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/index';
import Body from './body/index';

import "./app.scss"

class App extends React.Component {
    render() {
        return (
            <div className={"app"} >
                <Header/>
                <Body/>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default App;
