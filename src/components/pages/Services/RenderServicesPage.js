import React from 'react';
import { render } from 'react-dom';

//component imports
import RenderServiceForm from './form-service/renderServiceForm';

function RenderServicesPage() {
  return (
    <>
      <div>
        <h1>Services</h1>
      </div>
      <RenderServiceForm />
    </>
  );
}

export default RenderServicesPage;
