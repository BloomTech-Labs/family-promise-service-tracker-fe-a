import React, { useState } from 'react';
import AddProgramForm from '../../forms/AddProgramForm.js';
import {
  addProgramAction,
  getAllProgramsAction,
} from '../../../state/actions/index.js';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function RenderProgramsPage({ addProgramAction, getAllProgramsAction, user }) {
  // instead of using Okta Groups, simple react-router-dom is used for convenience
  // permission clauses based on "src/common/Navbar/TabMenu.js"
  const history = useHistory();
  if (user.role !== 1 && user.role !== 2) {
    history.push('/');
  }

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
    user: state.user.user,
    programs: state.program.programs,
  };
};

export default connect(mapStateToProps, {
  addProgramAction,
  getAllProgramsAction,
})(RenderProgramsPage);
