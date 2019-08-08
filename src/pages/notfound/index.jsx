import React from 'react';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.notfound}>
        404, Page Not Found!
      </div>
    );
  }
}
