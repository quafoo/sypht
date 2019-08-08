import React from 'react';
import { Row, Col } from 'antd';
import Footer from './components/footer';
import Header from './components/header';
import NavLeft from './components/navLeft';
// import Home from './pages/home';
import styles from './style/common.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Admin extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <Row className={styles.container}>
        <Col span={3} className={styles.navLeft}>
          <NavLeft />
        </Col>
        <Col span={21} className={styles.main}>
          <Header />
          <Row className={styles.content}>
            {/* <Home /> */}
            {children}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
