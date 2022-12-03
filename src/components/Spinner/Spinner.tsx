import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-border text-info position-absolute bottom-50 start-50" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;