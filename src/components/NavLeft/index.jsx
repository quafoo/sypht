import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class NavLeft extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/home">
            <i className={styles.logo} />
          </NavLink>
        </div>
        <Menu theme="dark">
          <Menu.Item key="predict">
            <NavLink to="/predict">
              <Icon type="upload" />
              <span>Predict</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="documents">
            <NavLink to="/documents">
              <Icon type="file" />
              <span>Documents</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
