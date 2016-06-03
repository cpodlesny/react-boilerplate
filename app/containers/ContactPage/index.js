/*
 *
 * ContactPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectContactPage from './selectors';
import styles from './styles.css';
import RaisedButton from 'components/RaisedButton';

export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.contactPage }>
	      This is ContactPage container !
<RaisedButton></RaisedButton>
      </div>
    );
  }
}

const mapStateToProps = selectContactPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
