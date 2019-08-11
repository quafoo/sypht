import React from 'react';
import { connect } from 'react-redux';
import { Card, Table } from 'antd';
import { actionCreators } from './store';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.credentials.forEach((item) => {
      if (item.accessToken === '-') {
        this.props.updateAccessToken(item.clientId, item.clientSecret);
      }
    });
  }

  render() {
    const columns = [
      // {
      //   title: 'Client Name',
      //   dataIndex: 'clientName',
      //   key: 'clientName',
      // },
      {
        title: 'Field Set',
        dataIndex: 'fieldSet',
        key: 'fieldSet',
      },
      {
        title: 'Client ID',
        dataIndex: 'clientId',
        key: 'clientId',
      },
      {
        title: 'Client Secret',
        dataIndex: 'clientSecret',
        key: 'clientSecret',
      },
      // {
      //   title: 'Access Token',
      //   dataIndex: 'accessToken',
      //   key: 'accessToken',
      // },
    ];

    return (
      <div>
        <Card title="My Credentials">
          <Table
            bordered
            pagination={{ hideOnSinglePage: true }}
            columns={columns}
            dataSource={this.props.credentials}
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.getIn(['home', 'credentials']).toJS(),
});

const mapDispatchToProps = dispatch => ({
  updateAccessToken(clientId, clientSecret) {
    dispatch(actionCreators.getAccessTokenAction(clientId, clientSecret));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
