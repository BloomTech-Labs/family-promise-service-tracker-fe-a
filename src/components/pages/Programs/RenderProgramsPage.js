import React, { useState } from 'react';
import AddProgramForm from '../../forms/AddProgramForm.js';
import { addProgramAction } from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';

function RenderProgramsPage({ addProgramAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = programObj => {
    console.log('Recieved valuies of form: ', programObj);
    addProgramAction(programObj);
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

export default connect(null, { addProgramAction })(RenderProgramsPage);
