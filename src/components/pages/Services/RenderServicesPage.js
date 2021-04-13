import React from 'react';
import { render } from 'react-dom';

//component imports
import RenderServiceForm from './form-service/RenderServiceForm';
import AddServiceForm from './form-service';

function RenderServicesPage() {
  return (
    <>
      <div>
        <h1>Services</h1>
      </div>
      {/* Conditional goes here  IF needed*/}
      <AddServiceForm />
    </>
  );
}

export default RenderServicesPage;
