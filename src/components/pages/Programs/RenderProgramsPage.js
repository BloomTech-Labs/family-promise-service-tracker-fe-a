import React, { useState } from 'react';
import AddProgramForm from '../../forms/AddProgramForm.js';
import { Button } from 'antd';

function RenderProgramsPage() {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Recieved valuies of form: ', values);
    setVisible(false);
  };

  return (
    <div className="add-program-btn-ctn">
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Program
      </Button>
      <AddProgramForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

export default RenderProgramsPage;
