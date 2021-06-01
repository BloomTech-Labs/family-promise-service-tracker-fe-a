import React, { useState, useEffect } from 'react';
import RenderMyProfile from './RenderMyProfile';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { updateUserAction } from '../../../state/actions';
import TitleComponent from '../../common/Title';
import './profile.css';

const initialFormValues = {
  firstName: '',
  lastName: '',
  avatarUrl: '',
};

function MyProfileContainer({
  LoadingOutlined,
  updateUserAction,
  user,
  status,
}) {
  const { authState } = useOktaAuth();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    status === 'Resolved' && setIsInEditMode(false);
    status === 'Resolved' && setLoading(false);
    status === 'Pending...' && setLoading(true);
  }, [status]);

  useEffect(() => {
    setFormValues({
      firstName: user.firstName,
      lastName: user.lastName,
      avatarUrl: user.avatarUrl,
    });
  }, [user]);

  //upload functionality for images.
  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'service-tracker-lambda-labs33');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dsknipjet/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
    formValues.avatarUrl = file.secure_url;
  };

  const handleEdit = e => {
    setIsInEditMode(!isInEditMode);
  };

  const handleCancel = e => {
    setIsInEditMode(!isInEditMode);
    setFormValues({
      firstName: user.firstName,
      lastName: user.lastName,
      avatarUrl: user.avatarUrl,
    });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // calling the action to update DB
  const onSave = e => {
    e.preventDefault();
    updateUserAction(user.id, formValues);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <TitleComponent TitleText="My Profile" />
      </div>

      {authState.isAuthenticated && !user && (
        <LoadingOutlined className="loader" />
      )}
      {authState.isAuthenticated && user && (
        <RenderMyProfile
          LoadingOutlined={LoadingOutlined}
          authState={authState}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          onChange={handleChange}
          isInEditMode={isInEditMode}
          onSubmit={onSave}
          formValues={formValues}
          uploadImage={uploadImage}
          loading={loading}
          curUser={user}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    status: state.user.status,
  };
};

export default connect(mapStateToProps, { updateUserAction })(
  MyProfileContainer
);

// export default MyProfileContainer;
