import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

import "./getinvolved.scss"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '100vw'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2)
    },
    email: {
        width: '50vw',
        margin: theme.spacing(1)
    },
    mainmessage: {
        width: '50vw',
        margin: theme.spacing(1)
    },
    submit: {
        width: 200,
        margin: theme.spacing(1)
    }
  }));

export default function GetInvolved(){
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div className={classes.content}>
                <div>
                    <h1>Reach Out to Us!</h1>
                    
                    <form className={classes.form} noValidate autoComplete="off" action="#">
                        <TextField 
                            classes={{root: classes.email}}
                            color="secondary"
                            label="Your Email Address" 

                        />
                        <TextField
                            classes={{root: classes.mainmessage}}
                            label="Your Message" 
                            placeholder="Type your message here!"
                            multiline
                            color="secondary"
                            rows={10}
                            rowsMax={10}
                        />
                        <Button classes={{root: classes.submit}} color="secondary" variant="outlined" raised={false}>
                            Submit
                        </Button>
                    </form>
                </div>
                <div>
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
        </div>
    );
}

