import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    workExperience: {
        minHeight: '95vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        backgroundColor: "#282c34"
    },
    paper: {
        minHeight: '90vh',
    }
});

class About extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.workExperience}>

            </div>
        );
    }
}

export default withStyles(styles)(About);