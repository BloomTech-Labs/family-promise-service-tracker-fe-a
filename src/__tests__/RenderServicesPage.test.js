import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import RenderServicesPage from '../components/pages/Services/RenderServicesPage';

describe('<RenderServicesPage /> test suite', () => {
  test('It loads page', () => {
    render(
      <Router>
        <RenderServicesPage />
      </Router>
    );
  });
});
