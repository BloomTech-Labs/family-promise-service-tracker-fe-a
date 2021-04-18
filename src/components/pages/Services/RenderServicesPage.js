import React from 'react';
import { render } from 'react-dom';

//component imports

import { AddServiceForm } from './form-service';

function RenderServicesPage() {
  return (
    <>
      {/* Conditional goes here  IF needed*/}
      <AddServiceForm />
    </>
  );
}

export default RenderServicesPage;
