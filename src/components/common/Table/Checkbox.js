import { useState } from 'react';

const CheckboxComponent = props => {
  const [selected, setSelected] = useState([]);
  const selectedRowKeys = selected;

  const onSelectChange = selectedRowKeys => {
    setSelected(selectedRowKeys);
    const selectedUsers = [];
    selectedRowKeys.map(key => {
      return props.forEach(user => {
        if (user.key === key) {
          selectedUsers.push(user);
        }
      });
    });
    console.log(`Selected User Data:`, selectedUsers);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return rowSelection;
};

export default CheckboxComponent;
