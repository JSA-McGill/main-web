import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';

import Doge from "../../../../../assets/svg/doge.svg";
import Neko from "../../../../../assets/svg/neko.svg";
import Shiba from "../../../../../assets/svg/shiba.svg";
import InstagramIcon from '@material-ui/icons/Instagram';
import { VerticalAlignCenter } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        height: 400
    },
    media: {
      height: 300
    },
    actionarea: { 
        display: 'block',
        height: '100%',
        width: '100%'
    },
    content: {
        display: 'inline-block',
        height: '100%',
        flex: 1
    },
    flexObject: {
        display: 'flex',
        flex: 1
    },
    textObject: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'stretch',
    }
  }));
  

export default function Exec(props) {
    const classes = useStyles();

    const [focused, setFocused] = useState(false);

    return (
        <Grid item xs={8} sm={6} md={4} lg={2} xl={2}>
            <Card className={classes.root} variant="outlined" >
                <CardActionArea classes={{root: classes.actionarea}} onClick={() => setFocused(!focused)} >
                    { 
                    !focused &&
                        <CardMedia
                        className={classes.media}
                        image={props.Image}
                        />
                    }
                    <CardContent classes={{root: classes.content}} >
                        <Typography classes={{root: classes.flexObject}} gutterBottom variant="h5" component="h2" display="inline" style={{fontSize: 20, fontWeight: 'bold'}} >
                            {props.FirstName+" "+props.LastName}  
                        </Typography>
                        { !focused ? 
                            <>
                                <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h3">
                                    {props.Title}
                                </Typography>
                            </>
                            :
                             <>
                                <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h5" style={{fontStyle:"italic"}}>
                                    {props.Program}
                                </Typography>

                                <Typography classes={{root: classes.flexObject}} gutterBottom variant="body2" color="textSecondary" component="p">
                                    {props.Description}
                                </Typography>
                                
                                <Typography classes={{root: classes.flexObject}} gutterBottom display="inline" component="div">
                                    <Icon classes={{root : classes.instagramText}}>
                                        <InstagramIcon/>
                                    </Icon>
                                    <span classes={classes.instagramText}>
                                        {props.Instagram}
                                    </span>
                                </Typography>
                            </>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};