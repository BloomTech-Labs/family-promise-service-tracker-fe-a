import React from 'react';
import RenderMyProfile from './RenderMyProfile';
import { TabletHeader } from '../../common/index';

function MyProfileContainer() {
  return (
    <div>
      <TabletHeader />
      <RenderMyProfile />
    </div>
  );
}

export default MyProfileContainer;
