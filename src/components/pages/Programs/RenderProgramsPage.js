import React, { useState } from 'react';
import AddProgramForm from '../../forms/AddProgramForm.js';
import {
  addProgramAction,
  getAllProgramsAction,
} from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';

function RenderProgramsPage({ addProgramAction, getAllProgramsAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = programObj => {
    addProgramAction(programObj);
    setVisible(false);
  };

  return (
    <div>
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

const mapStateToProps = state => {
  return {
    programs: state.program.programs,
  };
};

export default connect(mapStateToProps, {
  addProgramAction,
  getAllProgramsAction,
})(RenderProgramsPage);
