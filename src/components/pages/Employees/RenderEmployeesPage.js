import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Multiselect } from 'multiselect-react-dropdown';

const Wrapper = styled.div``;

const Button = styled.button``;

const FormTitle = styled.h1`
  border-bottom: 1px solid black;
  padding: 1rem;
`;

const Form = styled.form`
  padding: 1rem;
`;

const InputTitle = styled.h3``;

const DropdownTitle = styled.h3`
  margin-top: 2rem;
`;

const Star = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e7e7e7;
  border-radius: 0.375rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
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

const multiOptions = [
  { name: 'Prevention', id: 1 },
  { name: 'After Care', id: 2 },
  { name: 'Sheltering', id: 3 },
];

Modal.setAppElement('#root');

function RenderEmployeePage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Wrapper>
      <Button onClick={openModal}>Add Employee</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Employee"
      >
        <FormTitle>Add Employee</FormTitle>
        <Form>
          <InputTitle>
            <Star>*</Star>First Name
          </InputTitle>
          <Input placeholder="Enter Employee's First Name" type="text" />
          <InputTitle>
            <Star>*</Star>Last Name
          </InputTitle>
          <Input placeholder="Enter Employee's Last Name" type="text" />
          <InputTitle>
            <Star>*</Star>Role
          </InputTitle>
          <Dropdown options={options} placeholder="Select an option" />
          <DropdownTitle>
            <Star>*</Star>Programs
          </DropdownTitle>
          <Multiselect options={multiOptions} displayValue="name" />
        </Form>
        <ButtonDiv>
          <Cancel onClick={closeModal}>Cancel</Cancel>
          <AddEmployee>Add Employee</AddEmployee>
        </ButtonDiv>
      </Modal>
    </Wrapper>
  );
}

export default RenderEmployeePage;
