import React, { useState, useEffect } from 'react';
import AddProgramForm from '../../forms/AddProgramForm.js';
import {
  addProgramAction,
  getAllProgramsAction,
} from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';

function RenderProgramsPage({ addProgramAction, getAllProgramsAction }) {
  const [visible, setVisible] = useState(false);
  // const [programList, setProgramList] = useState(null);

  const onCreate = programObj => {
    addProgramAction(programObj);
    setVisible(false);
  };

  // useEffect(() => {
  //   onCreate();
  // }, [addProgramAction]);

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

const mapStateToProps = state => {
  console.log(state);
  return {
    programs: state.program.programs,
  };
};

export default connect(mapStateToProps, {
  addProgramAction,
  getAllProgramsAction,
})(RenderProgramsPage);
