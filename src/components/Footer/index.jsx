import React from 'react';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        Copyright by Xiaohui Chen
      </div>
    );
  }
}
