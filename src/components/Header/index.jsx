import React from 'react';
// import { Icon, Button } from 'antd';
import styles from './index.scss';

export default class Header extends React.Component {
  state = { userName: 'xxxxx' }

  render() {
    return (
      <div className={styles.header}>
        <botton className={styles.button}>
          <span>{this.state.userName}</span>
        </botton>
      </div>
    );
  }
}
