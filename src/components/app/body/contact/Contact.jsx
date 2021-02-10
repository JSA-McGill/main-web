import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import "./contact.scss"

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
            </div>
        </div>
    );
}

