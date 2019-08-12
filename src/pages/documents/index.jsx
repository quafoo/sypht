import React from 'react';
import { Card, Table } from 'antd';

export default class Documents extends React.Component {
  componentWillMount() {
    const data = [
      {
        key: '1',
        document: 'https://apod.nasa.gov/apod/image/1908/5D4_5485seeley.jpg',
        filename: 'IMG3053.jpeg',
        id: 'ee406c43-5d5f-4720-a750-e5fb6a705851',
        uploaded: '2019-08-08',
      },
      {
        key: '2',
        document: 'https://apod.nasa.gov/apod/image/1908/5D4_5485seeley.jpg',
        filename: 'IMG3053.jpeg',
        id: 'ee406c43-5d5f-4720-a750-e5fb6a705851',
        uploaded: '2019-08-08',
      },
    ];
    this.setState({ dataSource: data });
  }

  render() {
    const columns = [
      {
        title: 'Document',
        dataIndex: 'document',
        key: 'document',
        render: pic => <img src={pic} alt="" style={{ width: '200px', height: '80px' }} />,
      },
      {
        title: 'Filename',
        dataIndex: 'filename',
        key: 'filename',
      },
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Uploaded',
        dataIndex: 'uploaded',
        key: 'uploaded',
      },
    ];
    const { dataSource } = this.state;

    return (
      <div>
        <Card title="Documents">
          <Table
            bordered
            pagination={{ hideOnSinglePage: true }}
            columns={columns}
            dataSource={dataSource}
          />
        </Card>
      </div>
    );
  }
}
