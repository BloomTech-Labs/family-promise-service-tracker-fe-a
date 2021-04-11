import React from 'react';
import { Avatar } from 'antd';

function RenderMyProfile({ curUser }) {
  return (
    <div>
      <h2>Welcome, {curUser.name}</h2>
      <div className="avatar-ctn">
        <Avatar size={200} src={curUser.avatarUrl} />
      </div>
      <h3>Email: {curUser.email}</h3>
      <h3>Role: {curUser.role}</h3>
    </div>
  );
}

export default RenderMyProfile;
