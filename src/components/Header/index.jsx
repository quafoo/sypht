import React from 'react';
import styles from './index.scss';

export default class Header extends React.Component {
  state = { userName: 'xxxxx' }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.button}>
          <span>{this.state.userName}</span>
        </div>
      </div>
    );
  }
}
