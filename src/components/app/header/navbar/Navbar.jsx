import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./navbar.scss"

// Things to include:
// - what jsa is about
//  - Upcoming events info
//  - Social media accounts (youtube, fb, Instagram)
//  - info about exec members?

export default function Navbar(props) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, value) => {

    }

        return (
            <Router>
                <div className="navbar">
                    <AppBar className="nabvar-appbar">
                        <Tabs
                            onChange={handleChange}
                            centered
                        >   
                            <Tab label="Home" component={Link} to="/"/>
                            <Tab label="About" component={Link} to="/about"/>
                            <Tab label="Events" component={Link} to="/events"/>
                            <Tab label="Execs" component={Link}/>
                            <Tab label="Contact" component={Link}/>
                        </Tabs>
                    </AppBar>
                </div>
            </Router>
        );
};


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


