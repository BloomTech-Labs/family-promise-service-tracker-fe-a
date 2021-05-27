import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import AddServiceTypeForm from '../components/forms/AddServiceTypeForm';

describe('<ServicesTypeForm /> test suite', () => {
  test('It loads page', () => {
    render(
      <Router>
        <AddServiceTypeForm />
      </Router>
    );
  });
});
