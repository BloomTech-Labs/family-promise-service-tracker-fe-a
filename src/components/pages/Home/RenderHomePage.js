import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import { TabletHeader } from '../../common/index';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <>
      <TabletHeader />
      <div>
        <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
        <div>
          <p>
            This is an example of a common example of how we'd like for you to
            approach components.
          </p>
          <p>
            <Link to="/profile-list">Profiles Example</Link>
          </p>
          <p>
            <Link to="/example-list">Example List of Items</Link>
          </p>
          <p>
            <Link to="/datavis">Data Visualizations Example</Link>
          </p>
          <p>
            <Button
              handleClick={() => authService.logout()}
              buttonText="Logout"
            />
          </p>
        </div>
      </div>
    </>
  );
}
export default RenderHomePage;
