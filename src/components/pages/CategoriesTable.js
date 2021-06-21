import React from 'react';
import { Table } from 'antd';

function CategoriesTable() {
  // const [data, setData] = useState([]);

  const data = [
    {
      category: '',
      type: 'service',
      usagerate: '',
    },
    {
      category: '',
      type: 'program',
      usagerate: '',
    },
  ];

  const column = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'key',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'key',
    },
    {
      title: 'Usage Rate',
      dataIndex: 'usagerate',
      key: 'key',
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={column} />
    </div>
  );
}

export default CategoriesTable;
