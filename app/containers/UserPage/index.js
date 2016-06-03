/**
 *
 * UserPage
 *
 */

import React from 'react';
import H1 from 'components/H1';
import Button from 'components/Button';
import { connect } from 'react-redux';
import selectUserPage from './selectors';
import { push } from 'react-router-redux';
import styles from './styles.css';

export class UserPage extends React.Component {

 /**
  ** Changes the route
  *
  *          * @param  {string} route The route we want to go to
  *             */
  openRoute = (route) => {
      this.props.changeRoute(route);
  };

  /**
   *    * Changed route to '/features'
   *       */
  openFeaturesPage = () => {
	    this.openRoute('/features');
	    };


  openHomePage = () => {
	              this.openRoute('/');
		                  };

  openContactPage = () => {
	    this.openRoute('/contact');
	    }

  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.userPage }>
      <H1>This is UserPage container !</H1>
      <Button handleRoute={this.openHomePage}>Contacts</Button>
      <Button handleRoute={this.openContactPage}>Contacts</Button>
      <Button handleRoute={this.openFeaturesPage}>Contacts</Button>
      </div>
    );
  }
}

//UserPage.propTypes = {
//  changeRoute: React.PropTypes.func
//
//};



const mapStateToProps = selectUserPage();

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
