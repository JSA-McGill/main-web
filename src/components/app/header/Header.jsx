import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';    
import Navbar from "./navbar/Navbar.jsx"
import "./header.scss"

const Header = (props) => {
  const { location } = props;

  const hideNavbar = () => {
    if (location.pathname.match('/')){
      return true;
    } 
    return true;
  }

  
  return (
        <div>
           <header className ="header">
                <Navbar/> 
              </header>
        </div>  
      );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header