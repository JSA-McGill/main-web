import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './exec.scss';

const useStyles = makeStyles({
    root: {
    },
    media: {
      height: 140,
    },
  });
  

export default function Exec(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={6} md={4} lg={2} xl={1}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={props.Image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" display="inline">
                        {props.FirstName+" "}  
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" display="inline" style={{fontWeight:"bold"}}>
                         {props.LastName}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="h3">
                         {props.Title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3" style={{fontStyle:"italic"}}>
                         {props.Program}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.Description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target='_blank' href={props.Linkedin}>
                        Linkedin
                    </Button>
                    <Button size="small" color="primary" target='_blank' href={props.Instagram}>
                        Instagram
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};