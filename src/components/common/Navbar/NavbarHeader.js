import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { useOktaAuth } from '@okta/okta-react';
import { getUserAction } from '../../../state/actions';

const NavbarHeader = ({ user, getUserAction }) => {
  const { authState, authService } = useOktaAuth();
  console.log('user: ', user);
  useEffect(() => {
    authState.isAuthenticated &&
      authService.getUser().then(user => {
        getUserAction(user.sub);
      });
  }, [authState.isAuthenticated, authService, getUserAction]);

  return (
    <div>
      <div
        style={{
          display: 'block',
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth: '100%',
          minHeight: '70px',
          margin: '0 auto',
          position: 'relative',
          background: 'white',
        }}
      >
        {user.role ? (
          <HamburgerMenu userRole={user.role} avatar={user.avatarUrl} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

NavbarHeader.propTypes = {
  classType: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { getUserAction })(NavbarHeader);
