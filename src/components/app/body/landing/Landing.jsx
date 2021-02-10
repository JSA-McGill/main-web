import React, { useState } from "react"
import PropTypes from 'prop-types';

import "./landing.scss";
import events from "../../../../assets/images/events.jpg"
import background from "../../../../assets/images/background.jpg"
import fam from "../../../../assets/images/fam.jpg"

import Events from '../events/Events';

export default function Landing() {
    return (
        <div>
            <div container className="landing">
                <div className="landing-headline">
                    {/* <img className="landing-main-image" src={fam}/> */}
                    <h1 className="landing-main-text"> Welcome to JSA McGill!  </h1>
                </div>
            </div>
        </div>
    );
}
