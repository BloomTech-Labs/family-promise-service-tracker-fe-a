import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../../common/Header';
import { LeftCircleFilled } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import './dashboard.css';

function RenderPMDashboard({ handleLogout }) {
  return (
    <div className="dashboard-container">
      <div className="btn-cont">
        <Button
          icon={
            <LeftCircleFilled style={{ color: 'red' }} onClick={handleLogout} />
          }
        >
          Logout
        </Button>
        <Button icon={<UserOutlined style={{ color: 'blue' }} />}>
          Profile
        </Button>
      </div>
      <Header title="Program Manager Dashboard" classType="dashboard-header" />
      <div className="navigation-container">
        <Link to="/programs">
          <Card title="Programs">
            <p>View, add, and update programs</p>
          </Card>
        </Link>
        <Link to="/services">
          <Card title="Services">
            <p>View, add, and update services</p>
          </Card>
        </Link>
        <Link to="/recipients">
          <Card title="Recipients">
            <p>View, add, and update recipients</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default RenderPMDashboard;
