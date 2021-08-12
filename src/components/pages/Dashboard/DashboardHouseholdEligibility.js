import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/Dashboard.scss';

export default function EligibilityDashboard() {
  const [eligible, setEligible] = useState('');
  const [householdId, setHouseholdId] = useState(null);

  const handleChange = () => {};

  const getEligibility = household_id => {
    axios.get(`/${household_id}`).then(res => {});
    setEligible().catch(err => {});
  };

  return (
    <div className="eligibilityDashboardContainer">
      <h1>Eligibility</h1>
      <div className="eligibilityForm">
        <form>
          <label htmlFor="householdId">
            <input
              name="householdId"
              id="householdId"
              placeholder="Enter A Household"
              value={householdId}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="eligibilityResults">
        <p>
          Eligible For Residential Assistance:
          {eligible.resident_assistance_eligibility}
        </p>
        <p>
          Eligible For Reduced Bus Fare: {eligible.reduced_bus_fare_eligibility}
        </p>
      </div>
    </div>
  );
}
