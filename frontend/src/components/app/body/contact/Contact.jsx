import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import "./contact.scss"

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Contact(){
    const classes = useStyles();

    return (
        <div className="contact">
            <div className="content">
                <h1>Reach Out to Us!</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Your Email Address" variant="outlined" />
                    <TextField id="filled-basic" label="Your Message" multiline variant="outlined" />
                </form>
                <a href="https://www.facebook.com/jsa.mcgill" target="_blank">
                                <IconButton>
                                <FacebookIcon />
                                </IconButton>
                            </a>
                            <a href="https://www.instagram.com/jsamcgill/?hl=en" target="_blank">
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                            </a>
            </div>
        </div>
    );
}

