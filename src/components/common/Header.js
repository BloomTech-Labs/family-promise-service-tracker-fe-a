import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className={props.classType}>
      <h1>{props.title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
};

export default Header;
