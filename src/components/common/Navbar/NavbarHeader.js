import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { useOktaAuth } from '@okta/okta-react';

const NavbarHeader = props => {
  const { authState } = useOktaAuth();
  return (
    <div>
      <div
        className={props.classType}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth: '100%',
          margin: '0 auto 40px',
          position: 'relative',
        }}
      >
        {authState.isAuthenticated ? <HamburgerMenu /> : <></>}
      </div>
    </div>
  );
};

NavbarHeader.propTypes = {
  classType: PropTypes.string,
};

export default NavbarHeader;
