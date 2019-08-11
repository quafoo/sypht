import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Uploader from './components/uploader';
import Selector from './components/selector';
import Preview from './components/preview';
import styles from './index.scss';

const Predict = props => (
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
      { props.showPreview ? <Preview /> : '' }
    </Row>
  </div>
);

const mapStateToProps = state => ({
  showPreview: state.getIn(['predict', 'showPreview']),
});

export default connect(mapStateToProps, null)(Predict);
