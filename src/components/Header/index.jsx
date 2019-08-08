import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: 'quafoo',
    });
  }

  render() {
    const { userName } = this.state;
    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <span className={styles.user_name}>
              Welcome,
              {userName}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
