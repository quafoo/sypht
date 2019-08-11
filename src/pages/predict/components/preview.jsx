import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import styles from '../index.scss';

const Preview = props => (
  <Card title="Fields" bordered={false} className={styles.preview}>
    {
      props.fields.map((item) => {
        const name = item.name.split('.')[1];
        const value = item.value === null ? 'N/A' : (`$${item.value}`);
        const { confidence } = item;
        return (
          <div key={name} className={styles.field}>
            <div className={styles.name}>{name}</div>
            <div className={styles.value}>{value}</div>
            <div className={confidence > 0.9 ? styles.confidence_high : styles.confidence_low} />
          </div>
        );
      })
    }
  </Card>
);

const mapStateToProps = state => ({
  fields: state.getIn(['predict', 'fields']),
});

export default connect(mapStateToProps, null)(Preview);
