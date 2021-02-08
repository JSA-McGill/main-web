import React from 'react';
import PropTypes from 'prop-types';
import About from './about/index';
import Events from './events/index';
import Landing from './landing/index';

import "./body.scss"

const Body = () => {
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

export default Body;