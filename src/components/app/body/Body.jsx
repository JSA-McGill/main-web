import React from 'react';
import PropTypes from 'prop-types';
import About from './about/About';
import Events from './events/Events';
import Landing from './landing/Landing';
import "./body.scss"

export default function Body (){
    return (
        <div className="body">
            <body>
                <Landing/>
                <About/>
                <Events/>
            </body>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};