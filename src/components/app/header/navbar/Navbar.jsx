import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

import logo from "../../../../assets/images/logo512.png";
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
    const [value, setValue] = React.useState(1);

    const handleChange = (event, value) => {
        setValue(value);
    }

        return (
            <div className="navbar">
                <AppBar className="nabvar--appbar" color="white">
                    <Tabs
                        textColor="secondary"
                        value={value}
                        onChange={handleChange}
                    >   
                        <Tab disabled component={() => (
                            <div className="navbar--appbar--container-logo">
                                <img className="navbar--appbar--logo" alt="Logo" src={logo} />
                            </div>
                        )}/>
                        <Tab disableRipple label="Home" component={Link} to="/"/>
                        <Tab disableRipple label="About" component={Link} to="/about"/>
                        <Tab disableRipple label="Events" component={Link} to="/events"/>
                        <Tab disableRipple label="Execs" component={Link} to="/execs"/>
                        <Tab disableRipple label="Contact" component={Link} to="/contact"/>
                    </Tabs>
                </AppBar>
            </div>
        );
};


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


