import React, { useState } from 'react';
import { addEmployeeAction } from '../../../state/actions';
import { connect } from 'react-redux';
import { Button } from 'antd';
import AddEmployeeForm from '../../forms/AddEmployeeForm';
import { useHistory } from 'react-router-dom';

function RenderEmployeePage({ addEmployeeAction, user }) {
  // instead of using Okta Groups, simple react-router-dom is used for convenience
  // permission clauses based on "src/common/Navbar/TabMenu.js"
  const history = useHistory();
  if (user.role !== 1) history.push('/');

  const [visible, setVisible] = useState(false);

  const onCreate = employeeObj => {
    addEmployeeAction(employeeObj);
    setVisible(false);
  };

  return (
    <>
      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Employee
        </Button>
        <AddEmployeeForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { addEmployeeAction })(
  RenderEmployeePage
);
