import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import RenderPMDashboard from './RenderPMDashboard';
import RenderAdminDashboard from './RenderAdminDashboard';

function DashboardContainer({ LoadingOutlined }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
  };

  // add conditional to check userrole and display correct Dahsboard accordingly
  // example below => change once we get user endpoints
  const userrole = 1;
  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingOutlined className="loader" />
      )}
      {authState.isAuthenticated && userInfo && userrole === 1 && (
        <RenderAdminDashboard handleLogout={handleLogout} />
      )}
      {authState.isAuthenticated && userInfo && userrole === 2 && (
        <RenderPMDashboard handleLogout={handleLogout} />
      )}
    </>
  );
}

export default DashboardContainer;
