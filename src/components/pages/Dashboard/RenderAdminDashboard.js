import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Card } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import Header from '../../common/Header';
import './dashboard.css';

function RenderAdminDashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="btn-cont">
        <Button icon={<LeftCircleFilled style={{ color: 'red' }} />}>
          Logout
        </Button>
        <Button icon={<UserOutlined style={{ color: 'blue' }} />}>
          Profile
        </Button>
      </div>
      <Header title="Admin Dashboard" classType="dashboard-header" />
      <div className="navigation-container">
        <Link to="/employees">
          <Card title="Employees">
            <p>View, add, and update employees</p>
          </Card>
        </Link>
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

export default RenderAdminDashboard;
