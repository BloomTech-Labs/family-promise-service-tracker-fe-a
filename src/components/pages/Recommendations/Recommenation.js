import React from 'react';

function Recommendation({ values }) {
  if (!values) {
    return <h3>Working fetching your Recommendations...</h3>;
  }

  return (
    <div className="recommendation container">
      {/* insert recommendation info here */}
    </div>
  );
}

export default Recommendation;
