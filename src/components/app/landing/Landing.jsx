import React, { useState } from "react"
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import "./landing.scss";
import events from "../../../assets/images/events.jpg"
import background from "../../../assets/images/background.jpg"
import fam from "../../../assets/images/fam.jpg"

import {
    Link
} from 'react-router-dom'

import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

export default function Landing() {
    return (
        <div>
            <div container className="landing">
               
                    <div className="landing-section">
                        <Slide direction="right" timeout={1200} in={true}>
                            <div className="landing-box">
                            <Fade in={true} timeout={2000}> 
                                <img className="landing-main-image" src={fam}/>    
                                </Fade>
                            </div>
                        </Slide>
                        <Fade in={true} timeout={1500}> 
                            <h1 className="landing-main-text"> 
                                Welcome to JSA McGill!  
                            </h1>
                        </Fade>
                    </div>
                
                <Slide direction="right" timeout={300} in={true}>
                    <div className="landing-section-image-only">
                        <Fade in={true} timeout={1500}> 
                            <div className="landing-box">
                                    <img className="landing-main-image" src={events}/>    
                            </div>
                        </Fade>
                    </div>
                </Slide>
                <div className="landing-section">
                    <Link to="/about">
                        <Button> Get Started </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
