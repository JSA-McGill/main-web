import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
      Switch,
      Route,
} from 'react-router-dom'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import RED from '@material-ui/core/colors/red';

import Header from './header/Header';
import Body from './body/Body';
import Landing from './landing/Landing';

import "./app.scss"

 const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'M_PLUS_1p',
        'NotoSans'
      ].join(','),
    },
    palette: {
        primary: {
          main: RED[50],
        },
        secondary: {
          main: RED[700],
        },
      },
  });
  

export default function App () {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <div className={"app"} >
                    <Header/>
                    <Body/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

