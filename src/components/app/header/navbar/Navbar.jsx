import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom'

import media_queries from '../../../../mixins/media_queries';
import { useMedia } from 'react-media';

import logo from "../../../../assets/images/logo512.png";

import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./navbar.scss"

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { useScrollPosition } from "../../../../hooks/useScrollPosition"

export default function Navbar(props) {

    const links = {"Home": "/", 
    "About":"/about", 
    "Events": "/events",
    "Blog": "/blog",
    "Contact": "/contact"};

    // Tabs
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }

    const matches = useMedia({ queries: media_queries });
    
    const showList = matches.small ? true : false;

    const handleFontChange = (value, text) => {
        if (value === true) {
            return (<div classes="navbar_tab--on">{text}</div>);
        } else {
            return (<div classes="navbar_tab">{text}</div>);
        }
    }
    
    // Drawer
    const [drawerOn, setDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setDrawer(open);
    };

    const anchor="right"

    // Scroll Position

    // const [sticky, setSticky] = useState(true)

    // useScrollPosition(
    //     ({ prevPos, currPos }) => {
    //     const isShow = currPos.y > prevPos.y
    //     if (isShow !== sticky) setSticky(isShow)
    //     },
    //     [sticky]
    // )

    return (
        <div className="navbar">
            <AppBar className={ true ? "navbar_appbar--off" : "navbar_appbar--on" } color="white">
                {showList ? (
                    <div>
                        <div className="navbar_appbar_menubar">
                            <div className="navbar_appbar_container_logo">
                                    <img className="navbar_appbar_logo" alt="Logo" src={logo} />
                            </div>
                            <IconButton color="secondary" aria-controls="simple-menu" aria-label="menu" onClick={toggleDrawer(true)}>
                               <MenuIcon/>
                            </IconButton>
                        </div>
                        <Drawer anchor={anchor} open={drawerOn} onClose={toggleDrawer(false)}>
                            <div
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    { Object.entries(links).map(([k, v], link) => (
                                        <ListItem disableRipple button key={k}>
                                             <Link to={v}>
                                                <ListItemText primary={k}/>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                                </div>
                        </Drawer>
                    </div>
                ) :
                (
                    <div className="navbar_appbar_tabs_container">
                        <Link to="/">
                            <div className="navbar_appbar_container_logo">
                                <img onClick={() => setValue(0)} className="navbar_appbar_logo" alt="Logo" src={logo} />
                            </div>
                        </Link>
                        <div className="nav_bar_tabs_divider"> </div>
                        <Tabs
                            classes="navbar_appbar_tabs"
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="primary"
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                        >   
                            <Tab  disableRipple label={handleFontChange(value === 1, "About")} component={Link} to="/about"/>
                            <Tab  disableRipple label={handleFontChange(value === 2, "Events")} component={Link} to="/events"/>
                            <Tab  disableRipple label={handleFontChange(value === 3, "Blog")} component={Link} to="/blog"/>
                            <Tab  disableRipple label={handleFontChange(value === 4, "Contact")} component={Link} to="/contact"/>
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
                        </Tabs>
                    </div>
                )}
            </AppBar>
        </div>
    );
};


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


