import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { useOktaAuth } from '@okta/okta-react';
import { getUserAction } from '../../../state/actions';

const NavbarHeader = ({ user, getUserAction }) => {
  const { authState, authService } = useOktaAuth();

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
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth: '100%',
          minHeight: '70px',
          margin: '0 auto 40px',
          position: 'relative',
        }}
      >
        {user.role ? <HamburgerMenu userRole={user.role} /> : <></>}
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
