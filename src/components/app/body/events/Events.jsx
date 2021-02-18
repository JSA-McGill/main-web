import React, { useState } from "react";
import PropTypes from 'prop-types';


import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import events from "../../../../assets/events/events.js"

import "./events.scss"

export default function Events() {
    
    const createEvent = (title, description, image, link) => {
        return (
            <Fade in={true} timeout={1000}>
            <Grid item>
                <Card raised="true" className="">
                <CardMedia
                    className="events-image"
                    image={process.env.PUBLIC_URL + image}
                    title={title}
                />
                <div className="">
                    <CardContent className="">
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {description}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
            </Grid>
            </Fade>
        )
    }

    return (
     
        
            <div className="events">
                <Slide direction="left" timeout={300} in={true}  >
                    <h2>
                        Upcoming Events
                    </h2>
                </Slide> 
                <Slide direction="left" timeout={500} in={true} >
                    <Grid container justify="center"  direction="row" spacing="4">
                        {events.upcoming.map((event, index) => (
                            createEvent(event.Title, event.Description, event.Image, event.Facebook)
                        ))}
                    </Grid>
                </Slide>
                <Slide direction="left" timeout={300} in={true}  >
                    <h2>
                        Past Events
                    </h2>
                </Slide>
                <Slide direction="left" timeout={500} in={true} >
                <Grid container justify="center" direction="row" spacing="4">
                    {events.past.map((event, index) => (
                            createEvent(event.Title, event.Description, event.Image, event.Facebook)
                        ))}
                    </Grid>
                </Slide>
            </div>
        
    );
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
};

