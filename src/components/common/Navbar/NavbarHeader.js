import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';

const NavbarHeader = props => {
  return (
    <div>
      {localStorage.getItem('okta-token-storage') ? (
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
          <HamburgerMenu />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

NavbarHeader.propTypes = {
  classType: PropTypes.string,
};

export default NavbarHeader;
