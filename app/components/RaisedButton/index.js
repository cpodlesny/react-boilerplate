/**
*
* RaisedButton
*
*/

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './styles.css';

class RaisedButton extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
         <RaisedButton label="Press" className={ styles.raisedButton } />
    </MuiThemeProvider>
    );
  }
}

export default RaisedButton;
