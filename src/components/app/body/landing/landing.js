import React from "react";
import PropTypes from 'prop-types';
import Display from "./display/index";

import "./landing.scss";

const Landing = () => {
    return (
        <div>
            <div container spacing={0} className="landing">
                <div className="landing--text">
                    We're JSA! 
                </div>
            </div>
        </div>
    );
}

export default Landing;