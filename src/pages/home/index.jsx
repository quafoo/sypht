import React from 'react';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.home_wrapper}>
        Welcome to Sypht!
      </div>
    );
  }
}
