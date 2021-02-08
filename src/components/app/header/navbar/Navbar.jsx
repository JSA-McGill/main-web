import React from 'react';
import PropTypes from 'prop-types';
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
            <div className="navbar">
                 <AppBar className="nabvar-appbar" color="seconday">
                    <Tabs
                        onChange={handleChange}
                        centered
                    >
                        <Tab label="About" />
                        <Tab label="Events" />
                        <Tab label="Execs" />
                        <Tab label="Contact" />
                    </Tabs>
                 </AppBar>
            </div>
        );
};


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


