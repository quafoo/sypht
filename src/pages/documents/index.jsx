import React from 'react';
import { Card, Table } from 'antd';

export default class Documents extends React.Component {
  componentWillMount() {
    const data = [
      {
        document: 'https://apod.nasa.gov/apod/image/1908/5D4_5485seeley.jpg',
        filename: 'IMG3053.jpeg',
        id: 'ee406c43-5d5f-4720-a750-e5fb6a705851',
        uploaded: '2019-08-08',
      },
      {
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
        render: pic => <img src={pic} alt="" style={{ width: '200px', height: '80px' }} />,
      },
      {
        title: 'Filename',
        dataIndex: 'filename',
      },
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Uploaded',
        dataIndex: 'uploaded',
      },
    ];
    const { dataSource } = this.state;

    return (
      <div>
        <Card title="Documents">
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
          />
        </Card>
      </div>
    );
  }
}
