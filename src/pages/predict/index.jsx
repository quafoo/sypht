import React from 'react';
import { Row, Col } from 'antd';
import Uploader from './components/uploader';
import Selector from './components/selector';
import Preview from './components/preview';
import styles from './index.scss';

const Predict = () => (
  <div>
    <Row className={styles.panel}>
      <Col span={14}>
        <p>Select a field set</p>
      </Col>
      <Col>
        <Selector />
      </Col>
    </Row>
    <Row>
      <Uploader />
    </Row>
    <Row>
      <Preview />
    </Row>
  </div>
);

export default Predict;
