import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Navbar from "./navbar/index"

const styles = theme => ({
  appHeader: {
   
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
      return (
        <div>
          <header className ="header">
            <Navbar/>
          </header>
        </div>  
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
