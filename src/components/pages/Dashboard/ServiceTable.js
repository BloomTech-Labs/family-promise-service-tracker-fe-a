import { useState, React } from 'react';
import Table from 'antd/lib/table/Table';

function ServiceTable() {
  const [data, setData] = useState([]);

  const column = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'key',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'key',
    },
  ];

  return (
    <div>
      <h1>Working</h1>
      <Table dataSource={data} columns={column} />
    </div>
  );
}

export default ServiceTable;
