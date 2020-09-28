import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button  class='button-name' type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
