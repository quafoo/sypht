import React from 'react';
import { Row, Col } from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import styles from './style/common.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Admin extends React.Component {
  render() {
    return (
      <Row className={styles.container}>
        <Col span={3} className={styles.navLeft}>
          <NavLeft />
        </Col>
        <Col span={21} className={styles.main}>
          <Header />
          <Row className={styles.content}>
            <Home />
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
