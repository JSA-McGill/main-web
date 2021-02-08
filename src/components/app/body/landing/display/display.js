import React from "react";
import PropTypes from 'prop-types';
import bench  from "../../../../../assets/images/bench_1.jpg";
import "./display.scss";


const Display = () =>  {
    return (
        <div className="display">
            <img className="display__image" alt="bench" src={bench} />
        </div>
    );
}

export default Display;