import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Space } from 'antd';
import axios from 'axios';
import '../../../styles/Dashboard.scss';
import { AudioOutlined } from '@ant-design/icons';

export default function EligibilityDashboard() {
  const [eligible, setEligible] = useState({
    resident_assistance_eligibility: false,
    reduced_bus_fare_eligibility: false,
  });
  const [householdId, setHouseholdId] = useState(null);

  const handleChange = event => {
    setHouseholdId(event.target.value);
  };

  const getEligibility = (event, householdId) => {
    event.preventDefault();
    axios
      .post(
        `http://family-promise-dev.us-east-1.elasticbeanstalk.com/eligibility/${householdId}`
      )
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

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = value => console.log(value);
  return (
    <div className="eligibilityDashboardContainer">
      <div className="eligibilityForm">
        <form
          onSubmit={event => {
            getEligibility(event, householdId);
          }}
        >
          <div className="adjoin">
            <div>
              <h3 className="House"> Household </h3>
              <h1 className="Eligiable"> Eligibility </h1>
            </div>
            <div>
              <Space htmlFor="householdId">
                <Input
                  name="householdId"
                  id="householdId"
                  placeholder="Enter A Household ID"
                  enterButton="Search"
                  value={householdId}
                  onChange={handleChange}
                  size="small"
                  suffix={suffix}
                  onSearch={onSearch}
                />
                <Button style={{ color: '#6495ED' }}> Submit </Button>
              </Space>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Removed for styling purposes.

//<div className="eligibilityResults">
//  <p>Eligible For Residential Assistance</p>
// <p className="resultAnswer">
// {eligible.resident_assistance_eligibility ? ' Yes' : ' No'}
// </p>
// <p>Eligible For Reduced Bus Fare</p>
//<p className="resultAnswer">
// {eligible.reduced_bus_fare_eligibility ? ' Yes' : ' No'}
//</p>
//</div>
//
//
