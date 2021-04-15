import React, { useState, useEffect, useMemo } from 'react';
import RenderMyProfile from './RenderMyProfile';
import { useOktaAuth } from '@okta/okta-react';
import { TabletHeader } from '../../common/index';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import './profile.css';
import { connect } from 'react-redux';

import { updateUserAction } from '../../../state/actions';

const initialValues = {
  name: '',
  avatarUrl: '',
};

function MyProfileContainer({ LoadingOutlined }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(false);
  const [curUser, setCurUser] = useState(false);
  const [profile, setProfile] = useState(initialValues);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  //state needed for profile edit
  const [disabled, setDisabled] = useState(true);
  const [isInEditMode, setIsInEditMode] = useState(false);
  console.log('editMode', isInEditMode);

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
    setIsInEditMode(!isInEditMode);
  };

  const handleCancel = e => {
    setDisabled(!disabled);
    setIsInEditMode(!isInEditMode);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setProfile({ ...initialValues, [name]: value });
  };
  // calling the action to update DB
  const onSave = e => {
    e.preventDefault();
    updateUserAction(profile);
  };

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
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          onChange={handleChange}
          disabled={disabled}
          isInEditMode={isInEditMode}
          onSubmit={onSave}
          setProfile={setProfile}
          profile={profile}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { updateUserAction })(
  MyProfileContainer
);

// export default MyProfileContainer;
