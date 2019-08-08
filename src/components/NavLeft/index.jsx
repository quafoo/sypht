import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class NavLeft extends React.Component {
  render() {
    return (
      <div>
        <div>
          <i className={styles.logo} />
        </div>
        <Menu theme="dark">
          <Menu.Item key="predict">
            <Icon type="upload" />
            <span>Predict</span>
          </Menu.Item>
          <Menu.Item key="documents">
            <Icon type="file" />
            <span>Documents</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
