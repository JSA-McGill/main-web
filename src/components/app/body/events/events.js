import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    projects: {
        minHeight: '95vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        // background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.3) 100%),url("+ McGillImage + ")",
        // backgroundRepeat: "no-repeat"
    },
    paper: {
        minHeight: '90vh',
    }
});

class Events extends React.Component {
    render() {
        const { classes }  = this.props;
        return (
            <div className={classes.projects}>
               
            </div>
        );
    }
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);