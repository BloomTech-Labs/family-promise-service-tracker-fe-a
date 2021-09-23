import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabMenu from './TabMenu';
import HamburgerMenu from './HamburgerMenu';
import { useOktaAuth } from '@okta/okta-react';
import { getUserAction } from '../../../state/actions';

const NavbarHeader = ({ user, getUserAction }) => {
  const { authState, authService } = useOktaAuth();
  const [media, setMedia] = useState({
    match: window.matchMedia('(min-width: 769px)').matches,
  });

  useEffect(() => {
    authState.isAuthenticated &&
      authService.getUser().then(user => {
        getUserAction(user.sub);
      });
  }, [authState.isAuthenticated, authService, getUserAction]);

  let mql = window.matchMedia('(min-width: 769px)');

  mql.addEventListener('change', e => {
    e.preventDefault();
    setMedia({ match: e.matches });
  });

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
          media.match ? (
            <TabMenu userRole={user.role} avatar={user.avatarUrl} />
          ) : (
            <HamburgerMenu />
          )
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
