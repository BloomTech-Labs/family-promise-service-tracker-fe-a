import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Modal } from 'antd';
// import Modal from 'react-modal';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import { Multiselect } from 'multiselect-react-dropdown';

const Wrapper = styled.div``;

const Button = styled.button``;

const FormTitle = styled.h1`
  border-bottom: 1px solid black;
  padding: 1rem;
`;

const InputTitle = styled.h3``;

const DropdownTitle = styled.h3`
  margin-top: 2rem;
`;

const Star = styled.span`
  color: red;
`;

const Cancel = styled.button`
  color: #1890ff;
  background: white;
  border: 1px solid #1890ff;
  border-radius: 0.1rem;
  padding: 0.5rem 2.5rem;
  transition: 0.25s ease-in-out;

  &:hover {
    color: white;
    background: #1890ff;
    cursor: pointer;
  }
`;

const AddEmployee = styled.button`
  color: white;
  background: #006fba;
  border-radius: 0.1rem;
  border: none;
  padding: 0.5rem 1.3rem;
  transition: 0.25s ease-in-out;

  &:hover {
    background: #1890ff;
    cursor: pointer;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

const customStyles = {
  content: {
    margin: '0',
    padding: '0',
    width: '40%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const options = ['Administrator', 'Program Manager', 'Service Provider'];

const multiOptions = ['Prevention', 'After Care', 'Sheltering'];

function RenderEmployeePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Wrapper>
      <Button onClick={showModal}>Add Employee</Button>
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={customStyles}
        contentLabel="Add Employee"
      >
        <FormTitle>Add Employee</FormTitle>
        <Form>
          <InputTitle>
            <Star>*</Star>First Name
          </InputTitle>
          <Input
            style={{ marginBottom: '2rem' }}
            placeholder="Enter Employee's First Name"
            type="text"
            size="large"
          />
          <InputTitle>
            <Star>*</Star>Last Name
          </InputTitle>
          <Input
            style={{ marginBottom: '2rem' }}
            placeholder="Enter Employee's Last Name"
            type="text"
            size="large"
          />
          <InputTitle>
            <Star>*</Star>Role
          </InputTitle>
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="Select a Role"
          >
            {options.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
          <DropdownTitle>
            <Star>*</Star>Programs
          </DropdownTitle>
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="Programs"
            mode="multiple"
          >
            {multiOptions.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form>
        <ButtonDiv>
          <Cancel onClick={handleCancel}>Cancel</Cancel>
          <AddEmployee>Add Employee</AddEmployee>
        </ButtonDiv>
      </Modal>
    </Wrapper>
  );
}

export default RenderEmployeePage;
