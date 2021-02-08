import React from "react";
import PropTypes from 'prop-types';
import "./events.scss"

export default function Events() {

    return (
        <div className="events">
            <p>Event Page</p>
        </div>
    );
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
};

