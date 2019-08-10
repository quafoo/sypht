import React from 'react';
import { Row, Col } from 'antd';
import Footer from './components/footer';
import Header from './components/header';
import NavLeft from './components/navLeft';
import styles from './style/common.scss';

const Admin = props => (
  <Row className={styles.container}>
    <Col span={3} className={styles.navLeft}>
      <NavLeft />
    </Col>
    <Col span={21} className={styles.main}>
      <Header />
      <Row className={styles.content}>
        {props.children}
      </Row>
      <Footer />
    </Col>
  </Row>
);

export default Admin;
