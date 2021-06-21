import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import AddCategoryForm from '../../forms/AddCategoryForm';
import { connect } from 'react-redux';
import {
  addProgramAction,
  getAllProgramsAction,
} from '../../../state/actions/index.js';

function Categories() {
  const [visible, setVisible] = useState(false);

  const onCreate = categoryObj => {
    // addCategoryAction(categoryObj);
    setVisible(false);
  };

  useEffect(() => {
    getAllProgramsAction();
  }, []);

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

const mapStateToProps = state => {
  return {
    user: state.user.user,
    programs: state.program.programs,
  };
};

export default connect(mapStateToProps, {
  addProgramAction,
  getAllProgramsAction,
})(Categories);
