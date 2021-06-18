import React, { useState } from 'react';
import { Button } from 'antd';
import AddCategoryForm from '../../forms/AddCategoryForm';

export default function Categories() {
  const [visible, setVisible] = useState(false);

  const onCreate = categoryObj => {
    // addCategoryAction(categoryObj);
    setVisible(false);
  };

  return (
    <div>
      <h1>Categories</h1>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Category
      </Button>
      <AddCategoryForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
