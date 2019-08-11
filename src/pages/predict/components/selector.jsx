/* eslint-disable no-console */
import React from 'react';
import { Select } from 'antd';
import styles from '../index.scss';

const { Option } = Select;

class Selector extends React.PureComponent {
  onChange = (value) => {
    console.log(`selected ${value}`);
  }

  onBlur = () => {
    console.log('blur');
  }

  onFocus = () => {
    console.log('focus');
  }

  onSearch = (val) => {
    console.log('search:', val);
  }

  render() {
    return (
      <Select
        showSearch
        size="large"
        className={styles.selector}
        placeholder="Select a field set"
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) => option
          .props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    );
  }
}

export default Selector;
