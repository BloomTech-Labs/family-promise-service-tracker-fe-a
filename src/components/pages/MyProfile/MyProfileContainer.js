import React, { useState, useEffect, useMemo } from 'react';
import RenderMyProfile from './RenderMyProfile';
import { useOktaAuth } from '@okta/okta-react';
import { TabletHeader } from '../../common/index';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import './profile.css';
import { connect } from 'react-redux';
import { updateUserAction } from '../../../state/actions';
import Title from '../../common/Title';

const initialFormValues = {
  firstName: '',
  lastName: '',
  avatarUrl: '',
};

function MyProfileContainer({ LoadingOutlined, updateUserAction }) {
  const { authState, authService } = useOktaAuth();
  const [userId, setUserId] = useState(false);
  const [curUser, setCurUser] = useState(false);
  const [profileValues, setProfileValues] = useState(initialFormValues);
  const [prevValue, setPrevValue] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  //state needed for profile edit
  const [disabled, setDisabled] = useState(true);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [, setLoading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserId(info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserId(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  //brings in user data from back-end
  useEffect(() => {
    axiosWithAuth()
      .get(`api/profile/${userId}`)
      .then(res => {
        setCurUser(res.data);
        localStorage.setItem('role', res.data.role);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    setPrevValue({
      firstName: curUser.firstName,
      lastName: curUser.lastName,
      avatarUrl: curUser.avatarUrl,
    });
  }, [curUser]);

  console.log('prev values', prevValue);
  console.log('profile Values', profileValues);
  //upload functionality for images.
  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'service-tracker-lambda-labs33');

    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dsknipjet/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
    profileValues.avatarUrl = file.secure_url;
    console.log(file);
  };
  //handlers

  const handleEdit = e => {
    setDisabled(!disabled);
    setIsInEditMode(!isInEditMode);

    //add the previous values to state
  };

  const handleCancel = e => {
    setDisabled(!disabled);
    setIsInEditMode(!isInEditMode);
    setProfileValues(prevValue);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setProfileValues({ ...profileValues, [name]: value });
  };
  // calling the action to update DB
  const onSave = e => {
    e.preventDefault();
    updateUserAction(curUser.id, profileValues);
  };

  return (
    <div>
      <Title TitleText="My Profile" />

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
          profileValues={profileValues}
          uploadImage={uploadImage}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    role: state.role,
  };
};

export default connect(null, { updateUserAction })(MyProfileContainer);

// export default MyProfileContainer;
