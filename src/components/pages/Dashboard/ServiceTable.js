import { useState, React } from 'react';
import { Table } from 'antd';

function ServiceTable() {
  const [data, setData] = useState([]);

  const column = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'key',
      // render: name =>{
      //     // return <a>{name}</a>
      // }
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'key',
    },
  ];

  return (
    <div>
      <Table dataSource={[data]} columns={[column]}></Table>
    </div>
  );
}

export default ServiceTable;
