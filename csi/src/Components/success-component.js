import React from 'react';

const SuccessComponent = (props) => {
  const formData = props.location.state.formData; // Accessing form data passed from the form component

  return (
    <div>
      <h2>Success!</h2>
      <p>Form submitted successfully. Here are the details:</p>
      {/* Display the form data */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default SuccessComponent;
