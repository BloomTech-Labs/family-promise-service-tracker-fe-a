import React from 'react';

import RenderServiceForm from './RenderServiceForm';

function FormContainer() {
  //this is where handlers go

  const onChange = e => {
    const { value, name } = e.target;
    // dispatchEvent(
    //     setService({
    //         initialValues,
    //         [name]:value
    //     })
    // )
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <RenderServiceForm onChange={onChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default FormContainer;
