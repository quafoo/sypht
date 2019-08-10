import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.scss';

export default class Header extends React.Component {
  state = { userName: 'xxx' }

  render() {
    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <span className={styles.user_name}>
              Welcome,
              {this.state.userName}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
