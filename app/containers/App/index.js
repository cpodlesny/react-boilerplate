/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import 'sanitize.css/sanitize.css';
import Img from 'components/Img';
import Footer from 'components/Footer';
import A from 'components/A';
import Banner from './banner-metal.jpg';
import styles from './styles.css';


function App(props) {
  return (
    <div className={styles.wrapper}>
      <A className={styles.logoWrapper} href="https://twitter.com/mxstbr">
        <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
      </A>
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
