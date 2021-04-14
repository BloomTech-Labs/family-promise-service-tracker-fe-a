import React, { useState, useEffect, useMemo } from 'react';
import RenderMyProfile from './RenderMyProfile';
import { useOktaAuth } from '@okta/okta-react';
import { TabletHeader } from '../../common/index';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import './profile.css';

function MyProfileContainer({ LoadingOutlined }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(false);
  const [curUser, setCurUser] = useState(false);
  const [disabled, setDisabled] = useState('true');
  const [cancel, setCancel] = useState('false');
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
          setUserInfo(info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  useEffect(() => {
    axiosWithAuth()
      .get(`api/profile/${userInfo}`)
      .then(res => {
        setCurUser(res.data);
        localStorage.setItem('role', res.data.role);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userInfo]);

  const handleEdit = e => {
    setDisabled(!disabled);
    setCancel(!cancel);
  };

  // calling the action to update DB
  const onSave = e => {
    return;
  };
  //? Does onSave go on <Form> or <Button>?

  return (
    <div>
      <TabletHeader />
      {authState.isAuthenticated && !curUser && (
        <LoadingOutlined className="loader" />
      )}
      {authState.isAuthenticated && curUser && (
        <RenderMyProfile
          curUser={curUser}
          LoadingOutlined={LoadingOutlined}
          authState={authState}
          onClick={handleEdit}
          disabled={disabled}
          cancel={cancel}
          onSubmit={onSave}
        />
      )}
    </div>
  );
}

export default MyProfileContainer;
