import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import styles from '../index.scss';
import { actionCreators } from '../store';

const { Option } = Select;

class Selector extends React.PureComponent {
  onChange = (value) => {
    const { accessToken, fieldSet } = this.props.credentials
      .find(item => item.clientName === value);
    this.props.updateAccessTokenAndFieldSet(accessToken, fieldSet);
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
      >
        {
          this.props.credentials.map(
            item => <Option key={item.key} value={item.clientName}>{item.clientName}</Option>,
          )
        }
      </Select>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.getIn(['home', 'credentials']).toJS(),
  selectedAccessToken: state.getIn(['predict', 'selectedAccessToken']),
  selectedFieldSet: state.getIn(['predict', 'selectedFieldSet']),
});

const mapDispatchToProps = dispatch => ({
  updateAccessTokenAndFieldSet(accessToken, fieldSet) {
    dispatch(actionCreators.updateAccessTokenAndFieldSetAction(accessToken, fieldSet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
