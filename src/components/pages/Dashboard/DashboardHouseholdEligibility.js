import React, { useState } from 'react';
import axios from 'axios';

export default function EligibilityDashboard() {
  const [eligible, setEligible] = useState('');
  const [householdId, setHouseholdId] = useState(null);

  const getEligibility = household_id => {
    axios.get(`/${household_id}`).then(res => {});
    setEligible().catch(err => {});
  };

  return (
    <div className="eligibilityDashboardContainer">
      <h2>Eligibility</h2>
      <div className="eligibilityResults">
        <p>
          Eligible For Residential Assistance:{' '}
          {eligible.resident_assistance_eligibility}
        </p>
        <p>
          Eligible For Reduced Bus Fare: {eligible.reduced_bus_fare_eligibility}
        </p>
      </div>
    </div>
  );
}
