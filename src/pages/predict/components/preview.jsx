import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import styles from '../index.scss';

const Preview = props => (
  <Card title={props.title} bordered={false} className={styles.preview}>
    <div className={styles.field}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.value}>{props.value}</div>
      <div className={props.confidence > 0.5 ? styles.confidence_high : styles.confidence_low} />
    </div>
  </Card>
);

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(Preview);
