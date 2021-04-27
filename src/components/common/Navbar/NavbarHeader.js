import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import logo from '../../../assets/logo.png';

const NavbarHeader = props => {
  return (
    <>
      {localStorage.getItem('okta-token-storage') ? (
        <div className={props.classType} style={{ display: 'flex' }}>
          <div className="test">
            <HamburgerMenu />
          </div>
          <div className="top-bar-div">
            <img src={logo} className="top-bar-img" alt="family promise logo" />
          </div>
          {/* do classses instead of inline styling */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

NavbarHeader.propTypes = {
  classType: PropTypes.string,
};

export default NavbarHeader;
