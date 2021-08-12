import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/Dashboard.scss';

export default function EligibilityDashboard() {
  const [eligible, setEligible] = useState({
    resident_assistance_eligibility: false,
    reduced_bus_fare_eligibility: false,
  });
  const [householdId, setHouseholdId] = useState(null);

  const handleChange = event => {
    setHouseholdId(event.target.value);
  };

  const getEligibility = household_id => {
    axios
      .get(`/${household_id}`)
      .then(res => {
        setEligible({
          resident_assistance_eligibility:
            res.data.resident_assistance_eligibility,
          reduced_bus_fare_eligibility: res.data.reduced_bus_fare_eligibility,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="eligibilityDashboardContainer">
      <h1>Eligibility</h1>
      <div className="eligibilityForm">
        <form onSubmit={getEligibility(householdId)}>
          <label htmlFor="householdId">
            <input
              name="householdId"
              id="householdId"
              placeholder="Enter A Household ID"
              value={householdId}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="eligibilityResults">
        <p>
          Eligible For Residential Assistance:
          {eligible.resident_assistance_eligibility ? ' Yes' : ' No'}
        </p>
        <p>
          Eligible For Reduced Bus Fare:
          {eligible.reduced_bus_fare_eligibility ? ' Yes' : ' No'}
        </p>
      </div>
    </div>
  );
}
