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

    const handleFontChange = (value, text) => {
        if (value === true) {
            return (<div classes="navbar_tab--on">{text}</div>);
        } else {
            return (<div classes="navbar_tab">{text}</div>);
        }
    }
    
    return (
        <div className="navbar">
            <AppBar className="navbar--appbar" color="white">
                <Tabs
                    textColor="secondary"
                    value={value}
                    onChange={handleChange}
                >   
                    <Tab disabled component={() => (
                        <div className="navbar_appbar_container_logo">
                            <img className="navbar_appbar_logo" alt="Logo" src={logo} />
                        </div>
                    )}/>
                    <Tab disableRipple label={handleFontChange(value === 1, "Home")} component={Link} to="/"/>
                    <Tab  disableRipple label={handleFontChange(value === 2, "About")} component={Link} to="/about"/>
                    <Tab  disableRipple label={handleFontChange(value === 3, "Events")} component={Link} to="/events"/>
                    <Tab  disableRipple label={handleFontChange(value === 4, "Blog")} component={Link} to="/blog"/>
                    <Tab  disableRipple label={handleFontChange(value === 5, "Contact")} component={Link} to="/contact"/>
                </Tabs>
            </AppBar>
        </div>
    );
};


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


