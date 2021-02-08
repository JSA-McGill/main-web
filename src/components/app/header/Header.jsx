import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./navbar/Navbar.jsx"
import "./header.scss"

export default function Header() {
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

